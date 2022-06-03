import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, getContactState } from "../Redux/contactsSliсe";

import Input from "../Input";
import PhoneInput from "react-phone-number-input";

import { nanoid } from "nanoid";
import "react-phone-number-input/style.css";
import { FormContainer, BtnSubmit } from "./Form.styled";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");

  const contacts = useSelector(getContactState);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setName(e.currentTarget.value);
    setId(nanoid());
  };

  const handleSubmit = (e) => {
    if (number.length > 13) {
      return alert("Please enter correct phone number");
    }

    const checkName = contacts.find((el) => el.name === name);

    checkName === undefined
      ? dispatch(add({ name, number, id }))
      : alert(`${name} is already in contacts.`);

    e.preventDefault();
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
    setId("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        onChange={handleInputChange}
        title="Name"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Enter please name"
      />
      <PhoneInput
        defaultCountry="UA"
        onChange={(number) => {
          setNumber(number);
        }}
        region="Europe"
        title="Number"
        type="tel"
        name="number"
        value={number}
        placeholder="Enter phone number"
        autoComplete="off"
        international
        className="inputPhone"
        maxLength="16"
      />
      <BtnSubmit onSubmit={handleSubmit}>Add contact</BtnSubmit>
    </FormContainer>
  );
};

export default Form;
