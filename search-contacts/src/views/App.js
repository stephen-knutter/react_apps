import React, {Component, PropTypes} from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import ContactList from '../components/ContactList/ContactList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterText: ''
    }
  }

  handleUserInput(searchTerm) {
    this.setState({filterText: searchTerm})
  }

  render() {
    return(
      <div>
        <SearchBar filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)} />
        <ContactList contacts={this.props.contacts}
          filterText={this.state.filterText} />
      </div>
    )
  }
}
App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

export default App
