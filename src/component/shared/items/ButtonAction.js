import styled from "styled-components";
import backgroundThemes from "../../theme/backgroundTheme";
import themes from "../../theme/commonThemes";

const ButtonAction = styled.button`
  dislay: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  border-radius: ${themes["radius7"]};
  transition: 0.3s;
  background: #fff;
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${backgroundThemes["backgroundLight2"]};
  }
`;

export default ButtonAction;
