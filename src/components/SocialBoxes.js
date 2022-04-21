import styled from "styled-components";
import {SocialIcon} from "react-social-icons";


const Container = styled.div`
  width: 24px;
  height: 24px;
  display: inline-block;
`;

function SocialBoxes(props) {
  return (
    <Container>
        <SocialIcon url="https://www.instagram.com/sradenphoto/" style={{ height: 32, width: 32 }}/>
    </Container>
  );
}

export default SocialBoxes;
