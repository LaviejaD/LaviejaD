import styled from "styled-components";

export default function HeaderButtons({ title = "" }) {
  const Button1 = styled.h3`
    border: none;
    background: none;
    border-radius: 20%;
    width: 100%;
    text-align: center;

    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  `;
  return <Button1>{title} </Button1>;
}
