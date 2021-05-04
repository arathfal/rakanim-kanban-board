import styled, { css } from "styled-components";
import backgroundThemes from "../../theme/backgroundTheme";
import borderThemes from "../../theme/borderTheme";
import colorsThemes from "../../theme/colorsTheme";
import themes from "../../theme/commonThemes";

const TitleVariants = (todos) => {
  switch (todos) {
    case "1":
      return css`
        color: ${colorsThemes["colorMagenta"]};
        background: ${backgroundThemes["backgroundMagenta"]};
        border: 1px solid ${borderThemes["borderMagenta"]};
      `;
    case "2":
      return css`
        color: ${colorsThemes["colorPurple"]};
        background: ${backgroundThemes["backgroundPurple"]};
        border: 1px solid ${borderThemes["borderPurple"]};
      `;
    case "3":
      return css`
        color: ${colorsThemes["colorGeekBlue"]};
        background: ${backgroundThemes["backgroundGeekBlue"]};
        border: 1px solid ${borderThemes["borderGeekBlue"]};
      `;
    case "4":
      return css`
        color: ${colorsThemes["colorGreen"]};
        background: ${backgroundThemes["backgroundGreen"]};
        border: 1px solid ${borderThemes["borderGreen"]};
      `;
    default:
      return css`
        color: ${colorsThemes["colorDarkTwo"]};
        background: ${backgroundThemes["backgroundBlueGray"]};
        border: 1px solid ${borderThemes["borderGrayTwo"]};
      `;
  }
};

const TitleCard = styled.h6`
  ${(props) => TitleVariants(props.todos)};
  width: 5.375rem;
  height: 1.375rem;
  margin-bottom: 4px;
  font-size: ${themes["tinyText"]};
  font-weight: 400;
  line-height: ${themes["lineHeight20"]};
  text-align: center;
`;

export default TitleCard;
