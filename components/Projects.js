import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { ProjectContent } from "./ProjectContent";

export const Projects = (props) => {
  return (
    <MainContainer container>
      <Grid item md={10} lg={12}>
        <Heading>Projects</Heading>
        <ProjectContent />
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

const MainContainer = styled(Grid)`
  justify-content: center;
  align-items: center;
`;

export default Projects;
