import styled, { keyframes } from "styled-components";
import { TransparentButton } from "../components/TransparentButton";
import { RippleEffectAnimation } from "../components/RippleEffectAnimation";
import { colors } from "../utils/constants/colors";

export const IntroductionSection = (props) => {
  return (
    <MainContainer>
      <RippleEffectAnimation />
      <WriteUp>
        <Name>Edward Wang</Name>
        <Role>Full-stack Developer</Role>
        <TransparentButton text="About me" />
      </WriteUp>
      {/* <ProfilePic src="/images/ProfilePic.jpg" alt="Avatar" /> */}
    </MainContainer>
  );
};

const WriteUp = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  justify-content: center;
  @media (max-width: 600px) {
    text-align: center;
    height: 20%;
  }
  z-index: 2;
`;

const Name = styled.h1`
  color: ${colors.mainHeader};
  font-size: 4em;
  @media only screen and (min-width: 600px) {
    line-height: 1em;
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
  animation: ${TypeWriterFront} 4s steps(44, end) 500ms 1 normal both,
    ${BlinkTextCursor} 400ms steps(44, end) infinite normal;
  @media (max-width: 600px) {
    width: 100%;
    align-self: center;
  }
`;

const RotateY = keyframes`
to {
  transform: rotateY(360deg);
}
`;

const ProfilePic = styled.img`
  flex: 1;
  border-radius: 50%;
  height: 210px;
  width: 210px;
  animation: ${RotateY} 1s linear;
  &:hover {
    transform: rotateY(360deg);
    transition: transform 0.8s ease-in-out;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  overflow: hidden;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
  height: 90vh;
`;

// const Technologies = styled.ul`
//   columns: 2;
//   @media (max-width: 600px) {
//     text-align: left !important;
//     margin: 5% 5%;
//   }
// `;

// const Description = styled.div`
//   color: #324e7b;
//   font-size: 1.2rem;
//   margin-bottom: 3%;
//   margin-top: 0px;
//   font-weight: 400;
// `;

// const WriteUp = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   text-align: justify;
//   text-justify: inter-word;
//   margin-top: 5%;
//   @media (max-width: 960px) {
//     margin: 5% 5%;
//   }
//   @media (max-width: 600px) {
//     text-align: center;
//     margin: 5% 5%;
//   }
// `;

export default IntroductionSection;
