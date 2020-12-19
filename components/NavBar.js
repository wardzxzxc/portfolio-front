import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../utils/constants/colors";
import { Link } from "react-scroll";

export const NavBar = (props) => {
  const { closeDropdown, openDropdown, isDropdownVisible } = props;

  return (
    <MainContainer>
      <NavBarWrapper>
        <NavBarLink
          activeClass="active"
          to="aboutSection"
          spy={true}
          smooth={true}
          duration={1000}
        >
          About
        </NavBarLink>
        <NavBarLink href="#Skills">Experience</NavBarLink>
        <NavBarLink href="#Projects">Projects</NavBarLink>
        <HamburgerIcon
          icon={faBars}
          color="#f8f8f8"
          onClick={() => {
            openDropdown();
          }}
        />
      </NavBarWrapper>
    </MainContainer>
  );
};

const HamburgerIcon = styled(FontAwesomeIcon)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 25px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  height: 10vh;
  padding: 0 22px;
  overflow: hidden;
  position: fixed;
  top: 0;
  @media (max-width: 768px) {
    z-index: 2;
  }
`;

const NavBarWrapper = styled.div`
  margin-left: auto;
  display: flex;
`;

const NavBarLink = styled(Link)`
  color: ${colors.inactiveLinkColor};
  text-decoration: none;
  font-size: 1.5rem;
  opacity: 0.9;
  padding: 0 0.8rem;
  font-weight: 500;
  z-index: 5;
  &:hover {
    text-decoration: none;
    color: ${colors.activeLinkColor};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export default NavBar;
