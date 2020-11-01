import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Tabs from "./Tabs";

export const Experience = (props) => {
  return (
    <MainContainer container>
      <Grid item md={10} lg={12}>
        <h1>Experience</h1>
        <Tabs {...props} />
      </Grid>
    </MainContainer>
  );
};

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
