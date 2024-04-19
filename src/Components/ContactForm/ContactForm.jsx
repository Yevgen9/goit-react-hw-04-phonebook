// import React, { Component } from "react";
// import { nanoid } from "nanoid";
// import s from "./ContactForm.module.scss";
// // import contacts from "../../contacts.json";

// const INIITAL_STATE = {
//   name: "",
//   number: "",
// };

// class ContactForm extends Component {
//   state = INIITAL_STATE;

//   handleChangeForm = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   };

//   handleFormSubmit = (e) => {
//     e.preventDefault();

//     const { name, number } = this.state;
//     const { onAdd } = this.props;

//     const isValidatedForm = this.validateForm();

//     if (!isValidatedForm) return;

//     onAdd({ id: nanoid(), name, number });

//     this.resetForm();
//   };

//   validateForm = () => {
//     const { name, number } = this.state;
//     const { onCheck } = this.props;

//     if (!name || !number) {
//       alert("Some filed is empty");
//       return false;
//     }
//     return onCheck(name);
//   };

//   resetForm = () => this.setState(INIITAL_STATE);

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   render() {
//     const { name, number } = this.state;

//     return (
//       <div>
//         <form className={s.form} onSubmit={this.handleFormSubmit}>
//           <p className={s.text}>Name</p>
//           <input
//             id={this.nameInputId}
//             type="text"
//             name="name"
//             placeholder="Enter text"
//             value={name}
//             onChange={this.handleChangeForm}
//           />

//           <p className={s.text}>Number</p>
//           <input
//             id={this.numberInputId}
//             type="tel"
//             name="number"
//             placeholder="Enter phone number"
//             value={number}
//             onChange={this.handleChangeForm}
//           />

//           <button className={s.btn} type="submit">
//             Add Contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default ContactForm;

//===================================================================

import React, { useState } from "react";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.scss";

const INITIAL_STATE = {
  name: "",
  number: "",
};

export default function ContactForm({ onAdd, onCheck }) {
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, number } = form;

    const isValidatedForm = validateForm();
    if (!isValidatedForm) return;

    onAdd({ id: nanoid(), name, number });

    resetForm();
  };

  const validateForm = () => {
    const { name, number } = form;
    if (!name || !number) {
      alert("Some filed is empty");
      return false;
    }
    return onCheck(name);
  };

  const resetForm = () => setForm(INITIAL_STATE);

  const { name, number } = form;

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
