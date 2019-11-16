import React from "react";

import styled, { css } from "styled-components";

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  width: 70vw;
`;

const CSSReset = css`
  padding: 0;
  margin: 0;
  outline: 0;
`;

const Title = styled.h1`
  ${CSSReset}
  position: relative;
  text-align: left;
  font-size: 10rem;
  padding: 0;

  span {
    position: relative;
    z-index: 2;
  }

  &:after {
    content: "";
    background-color: #4699ff;
    display: inline-block;
    width: 65%;
    height: 75%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    transform: translateX(-10px);
  }
`;

const Subtitle = styled.h2`
  ${CSSReset}
  text-align: left;
`;

const Cover = () => {
  return (
    <Root>
      <Title>
        <span>React.js com TypeScript</span>
      </Title>
      <Subtitle>
        <span>O que pode dar errado?</span>
      </Subtitle>
    </Root>
  );
};

export default Cover;
