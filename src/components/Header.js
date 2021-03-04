import styled from "styled-components";

const Container = styled.header`
  padding: 2rem 2rem;
  font-weight: 600;
  background-color: #fff;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, .25);
  margin-bottom: 2rem;
`;
function Header() {
  return (
    <Container>
      RadenPixel
    </Container>
  );
}

export default Header;
