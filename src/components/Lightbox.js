import { SRLWrapper } from "simple-react-lightbox";
import test1 from "../images/test1.jpg";
import test2 from "../images/test2.jpg";
import test3 from "../images/test3.jpg";
import test4 from "../images/test4.jpg";
import test5 from "../images/test5.JPG";

const options = {
  buttons: {
    showDownloadButton: false,
    showAutoplayButton: false,
  },
};

function Lightbox() {
  return (
    <div className="Lightbox">
      <SRLWrapper options={options}>
        <a href={test1}>
          <img src={test1} width="500" alt="Umbrella" />
        </a>
        <a href={test2}>
          <img src={test2} width="500" alt="Umbrella" />
        </a>
        <a href={test3}>
          <img src={test3} width="500" alt="Umbrella" />
        </a>
        <a href={test4}>
          <img src={test4} width="500" alt="Umbrella" />
        </a>
        <a href={test5}>
          <img src={test5} width="500" alt="Umbrella" />
        </a>
      </SRLWrapper>
    </div>
  );
}

export default Lightbox;
