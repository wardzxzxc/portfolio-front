import styled, { keyframes } from "styled-components";
import { TransparentButton } from "./TransparentButton";
import { RippleEffectAnimation } from "./RippleEffectAnimation";
import { Link } from "react-scroll";
import { colors } from "../utils/constants/colors";

export const LandingSection = (props) => {
  return (
    <MainContainer>
      <RippleEffectAnimation />
      <Name>Edward Wang</Name>
      <Role>Full-stack Developer</Role>
      <Link
        activeClass="active"
        to="aboutSection"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <ButtonWrapper>
          <TransparentButton text="About me" />
        </ButtonWrapper>
      </Link>
    </MainContainer>
  );
};

const ButtonWrapper = styled.div`
  width: 200px;
`;

const Name = styled.h1`
  color: ${colors.mainHeader};
  font-size: 4em;
  margin-top: 0 !important;
  z-index: 2;
  @media (max-width: 768px) and (min-width: 320px) {
    line-height: 1em;
  }
  @media (min-width: 1441px) {
    font-size: 7em;
  }
`;

const TypeWriterFront = keyframes`
  from {
    width: 0; 
  }

  to {
    width: 11.5em;
  }
`;

const BlinkTextCursor = keyframes`
  from {
    border-right-color: ${colors.mainHeader}; 
  }
  to {
    border-right-color: transparent;
  }
`;

const Role = styled.div`
  color: ${colors.mainHeader};
  margin-top: 0px;
  margin-bottom: 5vh;
  font-family: "Anonymous Pro", monospace;
  font-size: 1.5em;
  overflow: hidden;
  border-right: 2px solid ${colors.mainHeader};
  width: 11.5em;
  white-space: nowrap;
  z-index: 2;
  animation: ${TypeWriterFront} 4s steps(44, end) 500ms 1 normal both,
    ${BlinkTextCursor} 400ms steps(44, end) infinite normal;
  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 1.2em;
  }
`;

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  min-height: 100vh;
  width: 80%;
  @media (max-width: 600px) and (min-width: 320px) {
    text-align: center;
    align-items: center;
  }
`;

export default LandingSection;
