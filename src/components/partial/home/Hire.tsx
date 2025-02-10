import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Props } from "../../../theme/styling/GlobalStyle";
import { Container } from "../../Container";
import Button from "../../shared/Button";
import { useGlitch } from "react-powerglitch";

const Wrapper = styled.section`
  padding-block: 6em;
  background-color: ${({ theme }: Props) => theme.secondaryBg};
  position: relative;
  .line {
    margin-inline: 0.6em;
  }

  h1 {
    font-size: 1.875rem;
    margin-block: 1em;
    @media (min-width: 50em) {
      font-size: 2.8rem;
    }
  }
  p {
    max-width: 37.5em;
    margin-inline: auto;
    margin-bottom: 1.8em;
  }
`;

const Hire = () => {
  const imgGlitch = useGlitch({
    playMode: "hover",
  });
  return (
    <Fade ssrFadeout left cascade>
      <Wrapper>
        <h1 className="side">Hire</h1>
        <Container>
          <h2 className="section__title">
            <span className="line"></span>
            <span className="deco">05. </span> What&apos;s Next?
            <span className="line"></span>
          </h2>
          <h1 className="text-center">{"Get In Touch"}</h1>
          <p className="text-center">
            {"Got an app or website idea for yourself or your organization?"}
          </p>
          <p className="text-center">
            {
              "Looking for a professional software developer to bring your visions to life and drive meaningful progress?"
            }
          </p>
          <p className="text-center">
            {
              "Whether you need a mobile app, a web platform, or a custom digital solution, I’m here to help. Let’s collaborate and build something impactful together!"
            }
          </p>
          <div className="flex">
            <Button
              ref={imgGlitch.ref}
              as="a"
              href="mailto:vinsdev185@gmail.com"
              className="text-center"
            >
              {"Send me an email"}
            </Button>
          </div>
        </Container>
      </Wrapper>
    </Fade>
  );
};

export default Hire;
