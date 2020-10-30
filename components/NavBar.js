import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const NavBar = (props) => {
  const { closeDropdown, openDropdown, isDropdownVisible } = props;

  return (
    <MainContainer>
      <NavBarWrapper>
        <NavBarLink href="#About">About</NavBarLink>
        <NavBarLink href="#Skills">Skills</NavBarLink>
        <NavBarLink href="#Projects">Projects</NavBarLink>
        <HamburgerIcon
          icon={faBars}
          color="grey"
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
  @media (max-width: 600px) {
    display: block;
    width: 25px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 22px;
  @media (max-width: 600px) {
    z-index: -1;
  }
`;

const NavBarWrapper = styled.div`
  margin-left: auto;
  display: flex;
`;

const NavBarLink = styled.a`
  color: grey;
  text-decoration: none;
  font-size: 1.2rem;
  opacity: 0.9;
  padding: 0 0.5rem;

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export default NavBar;
