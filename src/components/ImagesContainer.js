import { SRLWrapper } from "simple-react-lightbox";
import styled from "styled-components";
import TileData from "./TileData";
import Tile from "./Tile";

const options = {
  buttons: {
    showDownloadButton: false,
    showAutoplayButton: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
};

const ImgWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px 16px;
  @media only all and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only all and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }

  a {
    align-self: center;
    box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    overflow: hidden;
    img {
      vertical-align: bottom;
      width: 100%;
      height: 100%;
      max-height: 344px;
      object-fit: cover;
    }
  }
`;

function Lightbox() {
  return (
    <>
      {[...TileData.keys()].map((value, key) => (
        <>
        <h2>{value}</h2>
        <SRLWrapper key={key} options={options}>
          <ImgWrapper>
            {TileData.get(value).map((tile, i) => (
              <Tile key={i} tile={tile} />
            ))}
          </ImgWrapper>
        </SRLWrapper>
        </>
      ))}
    </>
  );
}

export default Lightbox;
