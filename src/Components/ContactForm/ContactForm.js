import { nanoid } from "nanoid";
import s from "./ContactForm.module.scss";
import { useState } from "react";

export default function ContactForm(onSubmit) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeForm = (target) => {
    // const { value } = target;
    setName(name);
    setNumber(number);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { onAdd } = this.props;

    // const isValidatedForm = validateForm();

    // if (!isValidatedForm) return;

    onAdd({ id: nanoid(), name, number });

    this.resetForm();
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <div>
      <form className={s.form} onSubmit={handleFormSubmit}>
        <p className={s.text}>Name</p>
        <input
          id={nameInputId}
          type="text"
          name="name"
          placeholder="Enter text"
          value={name}
          onChange={handleChangeForm}
        />

        <p className={s.text}>Number</p>
        <input
          id={numberInputId}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleChangeForm}
        />

        <button className={s.btn} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}
