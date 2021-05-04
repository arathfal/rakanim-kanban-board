import React, { useState } from "react";
import styled from "styled-components";
import LeftActive from "../../assets/Icons/ArrowLeft-Active.svg";
import Left from "../../assets/Icons/ArrowLeft.svg";
import RightActive from "../../assets/Icons/ArrowRight-Active.svg";
import Right from "../../assets/Icons/ArrowRight.svg";
import DeleteActive from "../../assets/Icons/Delete-Active.svg";
import Delete from "../../assets/Icons/Delete.svg";
import EditActive from "../../assets/Icons/Edit-Active.svg";
import Edit from "../../assets/Icons/Edit.svg";
import backgroundThemes from "../../theme/backgroundTheme";
import colorsThemes from "../../theme/colorsTheme";
import themes from "../../theme/commonThemes";

const ActionCardContainer = styled.div`
  position: absolute;
  top: 0;
  background: #fff;
  width: 8.625rem;
  height: auto;
  padding: 0.875rem 0;
  border-radius: ${themes["radius4"]};
  box-shadow: ${themes["shadow"]};
  display: ${({ open }) => (open ? "block" : "none")};
`;
const StyledAction = styled.button`
  display: flex;
  align-items: center;
  font: 400 ${themes["smallText"]} Open Sans;
  color: ${colorsThemes["colorDarkTwo"]};
  background: #fff;
  width: 100%;
  padding: 0.375rem 1rem 0.375rem 1.415rem;
  cursor: pointer;
  transition: 0.3s;
  border: none;
  &:hover,
  &:focus {
    color: ${colorsThemes["colorUngu"]};
    background: ${backgroundThemes["backgroundBlueGray"]};
  }
`;

const Text = styled.span`
  margin-left: 0.882rem;
`;
const Action = ({ icons, iconsActive, text }) => {
  const [icon, setIcon] = useState(icons);

  return (
    <StyledAction
      onMouseOver={() => setIcon(iconsActive)}
      onMouseOut={() => setIcon(icons)}
    >
      <img src={icon} alt={text} />
      <Text>{text}</Text>
    </StyledAction>
  );
};
const ActionCard = ({ open }) => {
  return (
    <ActionCardContainer open={open}>
      <Action icons={Left} iconsActive={LeftActive} text="Move Left" />
      <Action icons={Right} iconsActive={RightActive} text="Move Right" />
      <Action icons={Edit} iconsActive={EditActive} text="Edit" />
      <Action icons={Delete} iconsActive={DeleteActive} text="Delete" />
    </ActionCardContainer>
  );
};

export default ActionCard;
