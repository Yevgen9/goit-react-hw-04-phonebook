import { nanoid } from "nanoid";
import s from "./ContactForm.module.scss";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { onAdd } = this.props;

    const isValidatedForm = validateForm();

    if (!isValidatedForm) return;

    onAdd({ id: nanoid(), name, number });

    resetForm();
  };

  const validateForm = () => {
    const { onCheck } = this.props;

    if (!name || !number) {
      alert("Some filed is empty");
      return false;
    }
    return onCheck(name);
  };

  const resetForm = () => {
    setName(name);
    setNumber(number);
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
          onChange={handleChangeName}
        />

        <p className={s.text}>Number</p>
        <input
          id={numberInputId}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleChangeNumber}
        />

        <button className={s.btn} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}
