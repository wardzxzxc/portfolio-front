import styled, { keyframes } from "styled-components";
import Grid from "@material-ui/core/Grid";

export const Introduction = (props) => {
  return (
    <MainContainer container>
      <Grid item md={5}>
        <ProfilePic src="/images/ProfilePic.jpg" alt="Avatar" />
      </Grid>
      <Grid item md={7}>
        <WriteUp>
          <Greeting>Hi, I'm Edward</Greeting>
          <Description>
            I'm a Full-stack Developer based in Sunny Singapore. I recently
            graduated from National University of Singapore. I love to see ideas
            come into fruition and that's why I started learning coding! Oh, I'm
            a huge music enthusiast too!
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
      </Grid>
    </MainContainer>
  );
};

const Technologies = styled.ul`
  columns: 2;
  @media (max-width: 600px) {
    text-align: left !important;
    margin: 5% 5%;
  }
`;

const TypeWriter = keyframes`
  from {
    width: 0; 
  }

  to {
    width: 16rem;
  }
`;

const BlinkTextCursor = keyframes`
  from {
    border-right-color: black; 
  }
  to {
    border-right-color: transparent;
  }
`;

const Greeting = styled.h1`
  margin-top: 0px;
  font-size: 2rem;
  font-family: "Anonymous Pro", monospace;
  overflow: hidden;
  border-right: 2px solid black;
  width: 16rem;
  position: relative;
  white-space: nowrap;
  animation: ${TypeWriter} 4s steps(44, end) 500ms 1 normal both,
    ${BlinkTextCursor} 400ms steps(44, end) infinite normal;
  @media (max-width: 600px) {
    width: 100%;
    align-self: center;
  }
`;
const Description = styled.p`
  font-weight: 500;
  color: #8f929a;
  font-size: 1.2rem;
  margin-bottom: 3%;
  margin-top: 0px;
`;

const MainContainer = styled(Grid)`
  justify-content: center;
  align-items: center;
`;

const RotateY = keyframes`
to {
  transform: rotateY(360deg);
}
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  height: 210px;
  width: 210px;
  animation: ${RotateY} 1s linear;
  &:hover {
    transform: rotateY(360deg);
    transition: transform 0.8s ease-in-out;
  }
`;

const WriteUp = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: justify;
  text-justify: inter-word;
  margin-top: 5%;
  @media (max-width: 960px) {
    margin: 5% 5%;
  }
  @media (max-width: 600px) {
    text-align: center;
    margin: 5% 5%;
  }
`;

export default Introduction;
