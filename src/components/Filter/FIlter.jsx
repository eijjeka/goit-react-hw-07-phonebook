import { useDispatch, useSelector } from "react-redux";
import { ContainerSearch, Title, Input } from "./Filter.styled";
import { filter } from "../Redux/contactsSliсe";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.contacts.filter);

  const onChange = (e) => {
    dispatch(filter(e.currentTarget.value.toLocaleLowerCase()));
  };

  return (
    <ContainerSearch>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search name"
      />
    </ContainerSearch>
  );
};

export default Filter;
