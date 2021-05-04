import styled from "styled-components";
import borderThemes from "../../theme/borderTheme";
import themes from "../../theme/commonThemes";

const ItemCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 7.25rem;
  background: #fff;
  padding: 1rem 1rem 0.75rem;
  border: 1px solid ${borderThemes["borderGrayTwo"]};
  border-radius: ${themes["radius4"]};
`;

export default ItemCard;
