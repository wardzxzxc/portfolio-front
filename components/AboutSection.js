import styled from "styled-components";
import { Element } from "react-scroll";

export const AboutSection = (props) => {
  return (
    <MainContainer name="aboutSection">
      <ProfilePic src="/images/ProfilePic.jpg" />
      <WriteUp>
        <Description>
          I'm a Full-stack Developer based in Sunny Singapore. I recently
          graduated from National University of Singapore. I love to see ideas
          come into fruition and that's why I started learning coding! Oh, I'm a
          huge music enthusiast too!
        </Description>
        <Description>
          Here are a list of technologies that I'm working / have worked with:
          <Technologies>
            <li>React</li>
            <li>HTML & CSS</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Java Spring Boot</li>
            <li>SQL</li>
            <li>Oracle</li>
            <li>Docker</li>
          </Technologies>
        </Description>
      </WriteUp>
    </MainContainer>
  );
};

const Technologies = styled.ul`
  columns: 2;
  @media (max-width: 600px) and (min-width: 320px) {
    text-align: left !important;
    margin: 5% 5%;
  }
`;

const Description = styled.div`
  font-size: 1.2em;
  margin-bottom: 3%;
  margin-top: 0px;
  font-weight: 400;
  @media (max-width: 600px) and (min-width: 320px) {
    font-size: 1em;
    line-height: 1.7em;
  }
  @media (min-width: 1025px) {
    font-size: 1.2em;
    line-height: 2em;
  }
  @media (min-width: 1441px) {
    font-size: 1.6em;
    line-height: 2em;
  }
`;

const WriteUp = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  @media (max-width: 600px) and (min-width: 320px) {
    margin: 5% 3% 0 3%;
  }
  @media (min-width: 600px) {
    margin: 5% 0 0 3%;
  }
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  height: auto;
  width: auto;
  @media (max-width: 600px) {
    height: 20%;
  }
`;

const MainContainer = styled(Element)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  justify-content: space-around;
  height: 100vh;
  min-height: 100vh;
  @media (max-width: 600px) and (min-width: 320px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 600px) and (max-width: 1024px) {
    width: 90%;
  }
  @media (min-width: 1025px) {
    width: 60%;
  }
`;
