import styled from "styled-components";
import { colors } from "../utils/constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const SideModal = (props) => {
  const { closeDropdown, isDropdownVisible } = props;

  return (
    <MainContainer container isVisible={isDropdownVisible}>
      <IconWrapper>
        <CrossIcon
          icon={faTimes}
          color="white"
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
  @media (max-width: 600px) {
    height: 100%;
    background-color: ${colors.backgroundColor};
    display: flex;
    flex-direction: column;
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    box-shadow: 5px 10px 18px black;
    width: 300px;
    transform: ${(props) =>
      props.isVisible ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
  }
`;

const CrossIcon = styled(FontAwesomeIcon)`
  width: 25px;
  margin-left: auto;
  margin-right: 22px;
`;
