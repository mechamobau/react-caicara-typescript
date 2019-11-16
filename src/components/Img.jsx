import React from "react";

import { Root } from "./";

import styled from "styled-components";
import { width } from "styled-system";

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const StyledImg = styled.img`
  min-width: 50%;
  max-width: 700px;
  ${width}
`;

const Img = ({ src, ...props }) => {
  return (
    <Root>
      <Center>
        <StyledImg src={src} {...props} />
      </Center>
    </Root>
  );
};

export default Img;
