import React from "react";

import { Appear } from "mdx-deck";

import styled, { css } from "styled-components";
import IconWithLabel from "./IconWithLabel";

import { Root } from "./";

const Column = css`
  height: 100%;
`;

const Left = styled.div`
  width: 45vw;
  ${Column}
`;

const Right = styled.div`
  width: 55vw;
  ${Column}
`;

const Title = styled.h1`
  position: relative;
  text-align: left;
  font-size: 3.9rem;
  padding: 0;

  span {
    position: relative;
    z-index: 2;
  }

  &:after {
    content: "";
    background-color: #4699ff;
    display: inline-block;
    width: 69%;
    height: 60%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    transform: translateX(-10px);
  }
`;

const List = styled.ul`
  padding-left: 0;
  list-style-type: none;
`;

const SocialList = styled(List)`
  margin-top: 100px;
`;

const Item = styled.li`
  padding: 10px 0;
  text-align: left;
`;

const Img = styled.img`
  width: auto;
  max-height: 100%;
`;

const Hello = () => {
  return (
    <Root>
      <Left>
        <Title>
          <span>Olá, me chamo Baú!</span>
        </Title>
        <List>
          <Appear>
            <Item>Caiçara</Item>
            <Item>Desenvolvedor Frontend</Item>
            <Item>Sistemas para Internet</Item>

            <Item>
              <SocialList>
                <Item>
                  <IconWithLabel icon={["fab", "github"]} label="@mechamobau" />
                </Item>
                <Item>
                  <IconWithLabel
                    icon={["fab", "twitter"]}
                    label="@mechamobau"
                    iconStyle={{ color: "#1DA1F2" }}
                  />
                </Item>
              </SocialList>
            </Item>
          </Appear>
        </List>
      </Left>
      <Right>
        <Img src="../assets/foto-principal.jpg" />
      </Right>
    </Root>
  );
};

export default Hello;
