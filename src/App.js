import Logo from "./component/assets/Logo.svg";
import { ContentLayout, MainLayout } from "./component/layout/Layout";
import StyledContainer from "./component/shared/SideContainer";
import Title from "./component/shared/Title";

function App() {
  return (
    <MainLayout>
      <StyledContainer logo={Logo} name="Rakanim" />
      <ContentLayout>
        <Title text="Product Roadmap" />
      </ContentLayout>
    </MainLayout>
  );
}

export default App;
