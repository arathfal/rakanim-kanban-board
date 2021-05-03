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
