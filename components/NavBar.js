import styled from "styled-components";

export const NavBar = (props) => {
  return (
    <MainContainer>
      <RightNavBar>
        <RightNavBarLink href="#About">About</RightNavBarLink>
        <RightNavBarLink href="#Experience">Experience</RightNavBarLink>
        <RightNavBarLink href="#Projects">Projects</RightNavBarLink>
      </RightNavBar>
    </MainContainer>
  );
};

const MainContainer = styled.header`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 22px;
`;

const RightNavBar = styled.div`
  margin-left: auto;
  display: flex;
`;

const RightNavBarLink = styled.a`
  color: grey;
  text-decoration: none;
  font-size: 20px;
  opacity: 0.9;
  padding: 0 0.5rem;
`;

export default NavBar;
