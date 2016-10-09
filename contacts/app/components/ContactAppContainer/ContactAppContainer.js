import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import ContactsApp from '../ContactsApp/ContactsApp'
import 'whatwg-fetch'

class ContactAppContainer extends Component {
  constructor(){
    super()
    this.state={
      contacts: []
    }
  }

  componentDidMount(){
    fetch('./contacts.json')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({contacts: responseData})
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error)
    });
  }

  render(){
    return (
      <ContactsApp contacts={this.state.contacts} />
    )
  }
}

export default ContactAppContainer
