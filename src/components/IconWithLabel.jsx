import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div``;

const Label = styled.span`
  padding-left: 15px;
`;

const IconWithLabel = ({ icon, label, iconStyle }) => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={icon} style={iconStyle} />
      <Label>{label}</Label>
    </Wrapper>
  );
};

library.add(fab);

export default IconWithLabel;
