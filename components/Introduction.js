import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

export const Introduction = (props) => {
  return (
    <MainContainer container>
      <Grid item md={5}>
        <ProfilePic src="/profilePic2.jpg" alt="Avatar" />
      </Grid>
      <Grid item md={7}>
        <WriteUp>
          <Greeting>Hi, I'm Edward</Greeting>
          <Description>
            I'm a Full-stack Developer based in Sunny Singapore. I'm experienced
            in modern Front-end framework like <b>React</b> and Back-end
            frameworks like <b>NodeJs</b> and <b>Java Spring</b>. I also do have
            experiences in containerising applications using <b>Docker</b>.
          </Description>
          <Description>Oh, I'm a huge music enthusiast too!</Description>
        </WriteUp>
      </Grid>
    </MainContainer>
  );
};

const Greeting = styled.h1`
  margin-top: 0px;
  font-size: 2rem;
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

const ProfilePic = styled.img`
  border-radius: 50%;
  height: 200px;
  width: 200px;
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
