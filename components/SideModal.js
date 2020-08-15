import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const SideModal = (props) => {
  const { closeDropdown, isDropdownVisible } = props;

  return (
    <MainContainer container isVisible={isDropdownVisible}>
      <IconWrapper>
        <CrossIcon
          icon={faTimes}
          color="grey"
          onClick={() => {
            closeDropdown();
          }}
        />
      </IconWrapper>
    </MainContainer>
  );
};

const IconWrapper = styled.div`
  margin-top: 30px;
  display: flex;
`;

const MainContainer = styled.div`
  display: none;
  ${(props) =>
    props.isVisible &&
    css`
      @media (max-width: 600px) {
        width: 60%;
        height: 100vh;
        background-color: white;
        padding: 0 22px;
        display: flex;
        flex-direction: column;
        z-index: 1;
        position: absolute;
        top: 0;
        right: -70%;
        box-shadow: 5px 10px 18px black;
        animation: ${SlideIn} 1.5s forwards;
        overflow: hidden;
      }
    `}
`;

const CrossIcon = styled(FontAwesomeIcon)`
  width: 25px;
  margin-left: auto;
`;

const SlideIn = keyframes`
  100% {
    right: 0%;
  }
  /* 100% {
    right: 70%;
  } */
`;
