import React from "react";
import s from "./ContactList.module.scss";

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={s.item}>
      {name}: {number}{" "}
      <button className={s.btnDel} onClick={() => onRemove(id)}>
        Delete
      </button>
    </li>
  );
};

const ContactsList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default ContactsList;
