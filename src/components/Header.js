import styled from "styled-components";
import SocialBoxes from "./SocialBoxes";

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
  font-weight: 600;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .15);
  margin-bottom: 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  > div {
    padding: 0 2rem;
  }
`;
function Header() {
  return (
    <Container>
      <div>Steven Raden</div>
      <SocialBoxes/>
    </Container>
  );
}

export default Header;
