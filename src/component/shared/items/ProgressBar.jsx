import styled from "styled-components";
import Done from "../../assets/Icons/CheckCircle.svg";
import Fail from "../../assets/Icons/CloseCircle.svg";
import { FlexRowCenter } from "../../layout/Layout";
import backgroundThemes from "../../theme/backgroundTheme";
import colorsThemes from "../../theme/colorsTheme";
import themes from "../../theme/commonThemes";

const ProgressRange = styled.progress.attrs((props) => ({
  max: 100,
}))`
  backgorund: ${({ value }) =>
    value === "100"
      ? backgroundThemes["backgroundGreen"]
      : value === "null"
      ? backgroundThemes["backgroundRed"]
      : backgroundThemes["backgroundBlue"]};
  width: 5.625rem;
  height: 0.5rem;
  margin-right: 9px;
  border-radius: ${themes["radius8"]};
  border: none;
`;

const Percentage = styled.span`
  color: ${colorsThemes["colorGrayFour"]};
  font-size: ${themes["tinyText"]};
  font-weight: 400;
  line-height: ${themes["lineHeight22"]};
`;

const ProgressBar = ({ value }) => {
  return (
    <FlexRowCenter>
      <ProgressRange value={value}></ProgressRange>
      {value === "100" ? (
        <img src={Done} alt="Done" />
      ) : value === "null" ? (
        <img src={Fail} alt="Fail" />
      ) : (
        <Percentage>{value}%</Percentage>
      )}
    </FlexRowCenter>
  );
};

export default ProgressBar;
