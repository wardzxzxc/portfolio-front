import styled from "styled-components";
import Tabs from "./Tabs";

export const Experience = (props) => {
  return (
    <MainContainer container>
      <Heading>Experience</Heading>
      <Tabs {...props} />
    </MainContainer>
  );
};

const Heading = styled.h1`
  font-family: "Anonymous Pro", monospace;
  align-self: flex-start;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background-color: white;
`;

export default Experience;
