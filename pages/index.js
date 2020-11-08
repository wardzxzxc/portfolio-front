import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { Introduction } from "../components/Introduction";
import { SideModal } from "../components/RightNav";
import { Experience } from "../components/Experience";

export default function Home() {
  const [dropdown, setDropdown] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false);
  const [currentActiveTab, setCurrentActiveTab] = useState("UBS");

  useEffect(() => {
    setInitialLoad(true);
  }, []);

  return (
    <>
      <header>
        <Head>
          <title>Edward Wang - Portfolio</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        <NavBar openDropdown={() => setDropdown(true)} />
      </header>

      <Main>
        <SideModal
          closeDropdown={() => setDropdown(false)}
          isDropdownVisible={dropdown}
        />
        <Introduction />
        <Experience
          currentActiveTab={currentActiveTab}
          setUbsActive={() => setCurrentActiveTab("UBS")}
          setJtcActive={() => setCurrentActiveTab("JTC")}
          setActivateActive={() => setCurrentActiveTab("Activate")}
        />
      </Main>

      <Footer>2020 © Copyright Edward Wang.</Footer>
    </>
  );
}

const Main = styled.main`
  margin: 0 auto;
  max-width: 100%;
  width: 880px;
  overflow: hidden;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;
