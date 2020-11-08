import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Tabs from "./Tabs";

export const Experience = (props) => {
  return (
    <MainContainer container>
      <Grid item md={10} lg={12}>
        <Heading>Experience</Heading>
        <Tabs {...props} />
      </Grid>
    </MainContainer>
  );
};

const Heading = styled.h1`
  font-family: "Anonymous Pro", monospace;
`;

const Logo = styled.img`
  height: 150px;
  width: 150px;
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

export default Experience;
