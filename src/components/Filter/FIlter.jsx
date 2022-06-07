import { useDispatch, useSelector } from "react-redux";
import { ContainerSearch, Title, Input } from "./Filter.styled";
import { filter, getFilter } from "components/Redux/contactsSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = (e) => {
    dispatch(filter(e.currentTarget.value.toLocaleLowerCase().trim()));
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
