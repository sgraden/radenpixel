import ImagesContainer from "./components/ImagesContainer";
import Header from "./components/Header";
import "./App.css";
import SimpleReactLightbox from "simple-react-lightbox";


function App() {
  return (
    <div className="App">
      <Header />
      <SimpleReactLightbox>
        <ImagesContainer />
      </SimpleReactLightbox>

    </div>
  );
}

export default App;
