import React from "react";
import ContactListItem from "./ContactListItem";
import s from "./ContactList.module.scss";

const ContactsList = ({ contacts, onRemove }) => {
  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map((contact) => (
          <ContactListItem key={contact.id} {...contact} onRemove={onRemove} />
        ))}
    </ul>
  );
};

export default ContactsList;
