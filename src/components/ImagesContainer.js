import { SRLWrapper } from "simple-react-lightbox";
import sc from "styled-components";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";

const options = {
  buttons: {
    showDownloadButton: false,
    showAutoplayButton: false,
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
 
  images: {
    maxWidth: `100%`,
    maxHeight:  `100%`
  },
}));

const imgFullDir = process.env.PUBLIC_URL + `/photos/full-photos/`;
const imgThumbDir = process.env.PUBLIC_URL + `/photos/thumbnails/`;

const tileData = [
  {
    img: "austin-dam.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "austin-skyline.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "blue.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "chin.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "clovers.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "envy.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "fishing.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "forest-squirrel.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "forgotten-wheel.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "growth.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "half-moon.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "italy-cinque.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "italy-florence.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "italy.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "moth.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "thug.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
  {
    img: "web.jpg",
    title: "Dog looking Thugish",
    author: "Steven Raden",
  },
];

// const Container = sc.div`

// `;

function Lightbox() {
  const classes = useStyles();
  return (
    <SRLWrapper options={options}>
      <div className={classes.root}>
      <GridList  className={classes.gridList} cols={6}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 3}>
            <a href={imgFullDir + tile.img}>
              <img
                src={imgThumbDir + tile.img}
                alt={tile.title}
                className={classes.images}
              />
            </a>
          </GridListTile>
        ))}
        </GridList>
      </div>
    </SRLWrapper>
  );
}

export default Lightbox;
