import styled from "styled-components";
import { colors } from "../utils/constants/colors";

export const TransparentButton = (props) => {
  return (
    <MainContainer>
      <ButtonText>{props.text}</ButtonText>
    </MainContainer>
  );
};

const ButtonText = styled.div`
  color: ${colors.activeLinkColor};
  font-size: 1.5em;
`;

const MainContainer = styled.button`
  background-color: transparent;
  border: 2px solid ${colors.activeLinkColor};
`;
