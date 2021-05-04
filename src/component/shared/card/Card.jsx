import React from "react";
import styled from "styled-components";
import colorsThemes from "../../theme/colorsTheme";
import themes from "../../theme/commonThemes";
import StyledCard from "./StyledCard";
import Title from "./TitleCard";

const Months = styled.h4`
  font-size: ${themes["tinyText"]};
  line-height: ${themes["lineHeight20"]};
  color: ${colorsThemes["colorDarkTwo"]};
  margin-bottom: 0.875rem;
`;
const Card = ({ todos, children, title, month }) => {
  return (
    <StyledCard todos={todos}>
      <Title todos={todos}>{title}</Title>
      <Months>{month}</Months>
      {children}
    </StyledCard>
  );
};

export default Card;
