import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 64px auto;
  max-width: 600px;
  line-height: 150%;
  font-size: 20px;
  a {
    text-decoration: none;
    position: relative;
    color: #33A1DE;
    transition: all .1s ease-in-out;
    :after {
      content: "";
      background-color: #33A1DE;
      display: block;
      position: absolute;
      height: 6px;
      bottom:0;
      left:0;
      width: 100%;
      opacity: 50%;
    }

    :hover {
      color: #336EDE;

      :after {
        background-color: #336EDE
      }
    }
  }
`;

function PageIntro() {
  return (
    <Container>
      <article>
        <p>
          My name is Steven Raden. I am a photographer motivated by trying to
          make the mundane into a memory. Capturing what is seen everyday and
          seeing what we tend to ignore.
        </p>
        <p>
          For opportunities, questions, or prints, reach out to{" "}
          <a href="mailto:photo@sraden.com">photo@sraden.com</a>
        </p>
      </article>
    </Container>
  );
}

export default PageIntro;
