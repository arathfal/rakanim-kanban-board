import styled from "styled-components";
import borderThemes from "../../theme/borderTheme";
import themes from "../../theme/commonThemes";

const ItemCard = styled.div`
  background: #fff;
  padding: 1rem 1rem 1.375rem;
  border: 1px solid ${borderThemes["borderGrayTwo"]};
  border-radius: ${themes["radius4"]};
`;

export default ItemCard;
