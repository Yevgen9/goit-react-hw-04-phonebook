import React from 'react'
import s from "./ContactList.module.scss";


export default function ContactListItem({ id, name, number, onRemove }) {
  return (
    <li className={s.item}>
      {name}: {number}{" "}
      <button className={s.btnDel} onClick={() => onRemove(id)}>
        Delete
      </button>
    </li>
  );
}
