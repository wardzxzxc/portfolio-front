import styled from "styled-components";

export const Footer = (props) => {
  return <MainContainer>2020 © Copyright Edward Wang.</MainContainer>;
};

const MainContainer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;
