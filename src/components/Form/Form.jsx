import { useState } from "react";
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from "components/Redux/contactsApi";
import Input from "components/Input";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FormContainer, BtnSubmit } from "./Form.styled";
import { TailSpin } from "react-loader-spinner";

const Form = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (e) => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    if (number.length > 13) {
      return alert("Please enter correct phone number");
    }

    const checkName = contacts.find((el) => el.name === name);

    checkName === undefined
      ? createContact({ name, number })
      : alert(`${name} is already in contacts.`);

    e.preventDefault();
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
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
      <BtnSubmit disabled={isLoading} onSubmit={handleSubmit}>
        {isLoading && <TailSpin color="#fff" width="16" height="16" />}
        Add contact
      </BtnSubmit>
    </FormContainer>
  );
};

export default Form;
