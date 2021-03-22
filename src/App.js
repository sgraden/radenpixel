import ImagesContainer from "./components/ImagesContainer";
import Header from "./components/Header";
import PageIntro from "./components/PageIntro";

import "./App.css";
import SimpleReactLightbox from "simple-react-lightbox";
import styled from "styled-components";


const PageContainer = styled.div`
  margin: 1rem;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <PageContainer>
        <PageIntro />
        <SimpleReactLightbox>
          <ImagesContainer />
        </SimpleReactLightbox>
      </PageContainer>

    </div>
  );
}

export default App;
