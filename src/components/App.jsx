import Container from "./Container/Container";
import Form from "./Form";
import { List } from "./ContactsList/ContactsList";
import Filter from "./Filter/FIlter";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Title>Phonebook &#128211;</Title>
      <Form />
      <Filter />
      <List />
    </Container>
  );
}

const Title = styled.h1``;
