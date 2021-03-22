import styled from "styled-components";
import SocialBoxes from "./SocialBoxes";



const Container = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-around;
    height: 50vh;
    align-items: center;

    img {
        max-width: 500px;
        max-height: 500px;
        border-radius: 100%;
    }
`;

function PageIntro() {
  return (
    <Container>
        <div>    
            <img src="photos/profile.jpg" alt="Profile of Steven Raden" />
            <h2>My name is <br /> <span>Steven Raden</span></h2>
        </div>
        <article>
            <p>This is some information about me :D </p>
            <SocialBoxes />
        </article>
    </Container>
  );
}

export default PageIntro;
