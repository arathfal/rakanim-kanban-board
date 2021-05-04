import styled from "styled-components";
import colorsThemes from "../../theme/colorsTheme";
import themes from "../../theme/commonThemes";

const TitleItems = styled.h1`
  color: ${colorsThemes["colorDarkTwo"]};
  font-size: ${themes["smallText"]};
  line-height: ${themes["lineHeight20"]};
`;

export default TitleItems;
