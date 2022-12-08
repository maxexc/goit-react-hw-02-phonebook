import { Contacts } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import React, { Component } from 'react'

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  formSubmitHandler = event => {
    const newContact = {
      id: event.id,
      name: event.name,
      number: event.number,
    };
    // const id = event.id;
    // const name = event.name;
    // const number = event.number;
    const contactsLists = [...this.state.contacts];
    console.log(event);

    if (
      contactsLists.find(
        contacts => newContact.name.toLowerCase() === contacts.name.toLowerCase()
      )) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }    
   
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));    

    // this.setState({contacts: [newContact, contactsLists]})
    // contactsLists.push({ name, id, number });   

    // this.setState({contacts: contactsLists})
  }

  
  handleDelete = selectedId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== selectedId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };  

  // getFilteredContacts = () => {
  //   const normalizedFilter = this.state.filter.toLowerCase();
  //   const filterContactsList = this.state.contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(normalizedFilter);
  //   });
  //   return filterContactsList;
  // };
  
  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();   

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }

  render() {
    console.log(this.state.contacts);
    
    return (
      <>
        <PhonebookForm onSubmit={this.formSubmitHandler} />
        <Filter
          value={this.state.filter}
          onFilter={this.changeFilter} />
        <Contacts
          contactsFiltred={this.getVisibleContacts()}
          handleDelete={this.handleDelete}
        ></Contacts>
      </>
  )
}
}

export default App