import React from "react";
import styled from "styled-components";
import colorsTheme from "../theme/colorsTheme";
import commonThemes from "../theme/commonThemes";

const StyledTitle = styled.h1`
  color: ${colorsTheme["colorDarkOne"]};
  font-size: ${commonThemes["titleText"]};
  line-height: ${commonThemes["lineHeight20"]};
  margin-bottom: 1.5rem;
`;
const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;
