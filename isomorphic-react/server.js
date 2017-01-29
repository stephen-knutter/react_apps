import fs from 'fs';
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import routes from './app/routes';

const app = express();
app.set('views', './');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

const contacts = JSON.parse(fs.readFileSync(__dirname + '/public/contacts.json', 'utf8'));

let getPropsFromRoute = ({routes}, componentProps) => {
  let props = {};
  let lastRoute = routes[routes.length -1];
  routes.reduceRight((prevRoute, currRoute) => {
    componentProps.forEach(componentProp => {
      if (!props[componentProp] && currRoute.component[componentProp]) {
        props[componentProp] = currRoute.component[componentProp];
      }
    });
  }, lastRoute);
  return props;
};

let renderRoute = (response, renderProps) => {
  let routeProps = getPropsFromRoute(renderProps, ['requestInitialData']);
  if (routeProps.requestInitialData) {
    // IF one of the components implements 'requestInitialData', invoke it.
    routeProps.requestInitialData().then((data) => {
      // Overwrite the react-router create element function
      // and pass the pre-fetched data as initialData props
      let handleCreateElement = (Component, props) => (
        <Component initialData={data} {...props} />
      );
      // Render the template with RoutingContext and loaded data.
      response.render('index', {
        reactInitialData: JSON.stringify(data),
        content: renderToString(<RouterContext createElement={handleCreateElement} {...renderProps} />)
      });
    });
  } else {
    // No components in this route implements 'requestInitialData'
    // Simply render the template with RoutingContext and no initialData
    response.render('index', {
      reactInitialData: null,
      content: renderToString(<RouterContext {...renderProps} />)
    });
  }
};

app.get('*', (request, response) => {
  match({routes, location: request.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      response.status(500).send(error.message);
    } else if (redirectLocation) {
      response.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      renderRoute(response, renderProps);
    } else {
      response.status(404).send('Not found');
    }
  });
});

app.listen(5000, () => {
  console.log('Express app listening on port 5000');
});
