import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import { render } from "react-dom";
import styled from "styled-components";

export const ProjectContent = (props) => {
  const { experience, active } = props;

  return (
    <MainContainer container>
      <ProjectScreenshot src="/images/PingLaPong.png" />
    </MainContainer>
  );
};

const ProjectScreenshotWrapper = styled.div`
  position: absolute;
  left: 0;
`;

const ProjectScreenshot = styled.img``;

const MainContainer = styled.div`
  position: relative;
`;
