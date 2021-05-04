import styled, { css } from "styled-components";
import backgroundThemes from "../../theme/backgroundTheme";
import borderThemes from "../../theme/borderTheme";
import colorsThemes from "../../theme/colorsTheme";
import themes from "../../theme/commonThemes";

const CardVariants = (todos) => {
  switch (todos) {
    case "1":
      return css`
        background: ${backgroundThemes["backgroundPink"]};
        border: 1px solid ${borderThemes["borderPink"]};
      `;
    case "2":
      return css`
        background: ${backgroundThemes["backgroundUngu"]};
        border: 1px solid ${borderThemes["borderUngu"]};
      `;
    case "3":
      return css`
        background: ${backgroundThemes["backgroundBiru"]};
        border: 1px solid ${borderThemes["borderBiru"]};
      `;
    case "4":
      return css`
        background: ${backgroundThemes["backgroundHijau"]};
        border: 1px solid ${borderThemes["borderHijau"]};
      `;
    default:
      return css`
        background: ${backgroundThemes["backgroundBlueGray"]};
        border: 1px solid ${borderThemes["borderGrayTwo"]};
      `;
  }
};

const StyledCard = styled.div`
  ${(props) => CardVariants(props.todos)};
  color: ${colorsThemes["colorDarkTwo"]};
  padding: 0.875rem;
  border-radius: ${themes["radius4"]};
`;

export default StyledCard;
