import Container from "components/Container";
import Form from "components/Form";
import { List } from "components/ContactsList/ContactsList";
import Filter from "components/Filter/FIlter";
import styled from "styled-components";

export const ContactPage = () => (
  <Container>
    <Title>Phonebook &#128211;</Title>
    <Form />
    <Filter />
    <List />
  </Container>
);

const Title = styled.h1``;
