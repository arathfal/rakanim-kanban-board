import styled from "styled-components";
import backgroundThemes from "../theme/backgroundTheme";

export const MainLayout = styled.main`
  display: grid;
  grid-template-columns: 4.25rem auto;
  grid-template-rows: 100vh;
`;

export const SideLayout = styled.div`
  background: ${backgroundThemes["backgroundDark"]};
  padding: 1.25rem 0;
  display: flex;
  justify-content: center;
`;

export const ContentLayout = styled.div`
  padding: 1.25rem 3.125rem;
`;

export const FlexRowCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({ width }) => width};
`;

export const JustifyBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ width }) => width};
`;
