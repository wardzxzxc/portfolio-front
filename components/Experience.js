import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

export const Experience = (props) => {
  return (
    <MainContainer container>
      <Grid item md={7}>
        test
      </Grid>
    </MainContainer>
  );
};


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
  background-color: purple; 
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

export default Experience;
