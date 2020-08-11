import Head from "next/head";
import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { Introduction } from "../components/Introduction";

export default function Home() {
  return (
    <>
      <header>
        <Head>
          <title>Edward Wang - Portfolio</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        <NavBar />
      </header>

      <Main>
        <Introduction />
      </Main>

      <Footer>2020 © Copyright Edward Wang.</Footer>
    </>
  );
}

const Main = styled.main`
  margin: 0 auto;
  max-width: 100%;
  width: 880px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;
