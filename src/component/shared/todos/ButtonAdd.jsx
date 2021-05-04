import React from "react";
import styled from "styled-components";
import Add from "../../assets/Icons/PlusCircle.svg";
import colorsThemes from "../../theme/colorsTheme";
import themes from "../../theme/commonThemes";

const StyledButtonAdd = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  width: auto;
  height: auto;
  margin-top: 1rem;
  border: none;
  cursor: pointer;
`;
export const StyledText = styled.span`
  color: ${colorsThemes["colorDarkTwo"]};
  margin-left: 0.524rem;
  font-size: ${themes["smallText"]};
  font-weight: 400;
  line-height: ${themes["lineHeight20"]};
`;

const ButtonAdd = () => {
  return (
    <StyledButtonAdd>
      <img src={Add} alt="Add Task" />
      <StyledText>New Task</StyledText>
    </StyledButtonAdd>
  );
};

export default ButtonAdd;
