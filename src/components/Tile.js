import styled from "styled-components";
const imgFullDir = process.env.PUBLIC_URL + `/photos/full-photos/`;
const imgThumbDir = process.env.PUBLIC_URL + `/photos/thumbnails/`;

const addObjectPosition = ({ imgPosition }) => {
  return imgPosition ? imgPosition : "";
};

const TileImg = styled.img`
  object-position: ${addObjectPosition};
`;

function Tile(props) {
  const tile = props.tile;
  return (
    <a href={imgFullDir + tile.img}>
      <TileImg
        src={imgThumbDir + tile.img}
        alt={tile.title}
        imgPosition={tile.imgPosition}
      />
    </a>
  );
}

export default Tile;
