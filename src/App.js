// import React, { Component } from "react";
// import ContactForm from "./Components/ContactForm/ContactForm";
// import ContactsList from "./Components/ContactList/ContactList";
// import Filter from "./Components/Filter/Filter";
// import "./App.module.scss";

// class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   handleAddContact = (newContact) =>
//     this.setState(({ contacts }) => ({
//       contacts: [...contacts, newContact],
//     }));

//   handleCheckContact = (name) => {
//     const { contacts } = this.state;

//     const isExistContact = !!contacts.find((contact) => contact.name === name);

//     isExistContact && alert(`${name} is already exist`);

//     return !isExistContact;
//   };

//   handleRemoveContact = (id) =>
//     this.setState(({ contacts }) => ({
//       contacts: contacts.filter((contact) => contact.id !== id),
//     }));

//   handleFilterChange = (filter) => this.setState({ filter });

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;

//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     const contactItem = this.state.contacts;
//     localStorage.setItem("contactsItem", JSON.stringify(contactItem));

//     return (
//       <>
//         <h1>Phonebook</h1>
//         <ContactForm
//           onAdd={this.handleAddContact}
//           onCheck={this.handleCheckContact}
//         />
//         <h2>Contacts</h2>
//         <p>Find contacts by name</p>
//         <Filter filter={filter} onChange={this.handleFilterChange} />
//         <ContactsList
//           contacts={visibleContacts}
//           onRemove={this.handleRemoveContact}
//         />
//       </>
//     );
//   }
// }

// export default App;

//===============================================================

import { useState, useEffect } from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactsList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import "./App.module.scss";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contactsItem", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) =>
    setContacts((contacts) => [...contacts, newContact]);

  const handleCheckContact = (name) => {
    const isExistContact = !!contacts.find((contact) => contact.name === name);

    isExistContact && alert(`${name} is already exist`);

    return !isExistContact;
  };

  const handleRemoveContact = (id) =>
    setContacts((contacts) => contacts.filter((contact) => contact.id !== id));

  const handleFilterChange = (filter) => setFilter(filter);

  const getVisibleContacts = () =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} onCheck={handleCheckContact} />
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactsList contacts={visibleContacts} onRemove={handleRemoveContact} />
    </>
  );
}
