import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const NavBar = (props) => {
  return (
    <MainContainer>
      <RightNavBar>
        <RightNavBarLink href="#About">About</RightNavBarLink>
        <RightNavBarLink href="#Experience">Experience</RightNavBarLink>
        <RightNavBarLink href="#Projects">Projects</RightNavBarLink>
        <HamburgerIcon icon={faBars} color="grey" />
      </RightNavBar>
      <List>
        <CrossIcon icon={faTimes} color="white" />
        <li>About</li>
        <li>Experience</li>
        <li>Project</li>
      </List>
    </MainContainer>
  );
};

const List = styled.ul`
  display: none;
  @media (max-width: 600px) {
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 3.5rem;
    margin-top: 0;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }

  }
  /* @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  } */
`;

const CrossIcon = styled(FontAwesomeIcon)`
  display: none;
  @media (max-width: 600px) {
    width: 25px;
    top: 0px;
    position: absolute;
    right: 0px;
    display: flex;
    margin: 1rem;
  }
`;

const HamburgerIcon = styled(FontAwesomeIcon)`
  display: none;
  @media (max-width: 600px) {
    display: block;
    width: 25px;
  }
`;

const MainContainer = styled.header`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 22px;
  /* overflow: hidden; */
`;

const RightNavBar = styled.div`
  margin-left: auto;
  display: flex;
`;

const RightNavBarLink = styled.a`
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
