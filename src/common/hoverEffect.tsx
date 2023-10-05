import styled from "styled-components";

export const ulHover = styled.ul`

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20rem 0 purple, inset 0 0 20rem 0 purple;
  }

  &:active {
    cursor: grab;
  }
`;

export const divHover = styled.div`

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20rem 0 purple, inset 0 0 20rem 0 purple;
  }

  &:active {
    cursor: grab;
  }
`;