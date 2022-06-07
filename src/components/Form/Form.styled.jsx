import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  width: 300px;
  border-radius: 10px;
  color: #fff;
  background: linear-gradient(
    335deg,
    rgba(41, 30, 94, 1) 0%,
    rgba(29, 59, 201, 1) 50%,
    rgba(5, 196, 207, 1) 100%
  );
`;

export const BtnSubmit = styled.button.attrs(() => ({
  type: "submit",
}))`
  position: relative;
  padding: 5px 10px;
  display: inline-flex;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 29px;
    background: rgba(2, 94, 252, 0.308);
    border-radius: 5px;
    transition: all 1.5s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;
