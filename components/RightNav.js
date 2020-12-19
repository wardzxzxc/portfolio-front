import styled from "styled-components";
import { Link } from "react-scroll";
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
      <NavLinksContainer>
        <NavLink
          activeClass="active"
          to="aboutSection"
          spy={true}
          smooth={true}
          duration={1000}
          onClick={() => {
            closeDropdown();
          }}
        >
          About
        </NavLink>
        <NavLink>Experience</NavLink>
        <NavLink>Projects</NavLink>
      </NavLinksContainer>
    </MainContainer>
  );
};

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-align: center;
  font-size: 1.6em;
  margin: 5% 0;
`;

const IconWrapper = styled.div`
  margin-top: 30px;
  display: flex;
`;

const MainContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    height: 100%;
    background-color: ${colors.backgroundColor};
    display: flex;
    flex-direction: column;
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    box-shadow: 5px 10px 18px black;
    width: 300px;
    transform: ${(props) =>
      props.isVisible ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    z-index: 3;
  }
`;

const CrossIcon = styled(FontAwesomeIcon)`
  width: 25px;
  margin-left: auto;
  margin-right: 22px;
`;
