import Hello from "./Hello";
import Img from "./Img";
import Cover from "./Cover";

import styled from "styled-components";

export const Root = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 80vh;
  width: 70vw;
`;

export { Hello, Img, Cover };
