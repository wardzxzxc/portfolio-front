import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { IntroductionSection } from "../components/IntroductionSection";
import { Footer } from "../components/Footer";
import { SideModal } from "../components/RightNav";
import { Experience } from "../components/Experience";
import Projects from "../components/Projects";

export default function Home() {
  const [dropdown, setDropdown] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false);
  const [currentActiveTab, setCurrentActiveTab] = useState("UBS");

  useEffect(() => {
    setInitialLoad(true);
  }, []);

  return (
    <>
      <Head>
        <title>Edward Wang - Portfolio</title>
        <link rel="icon" href="/logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <NavBar openDropdown={() => setDropdown(true)} />
      <SideModal
        closeDropdown={() => setDropdown(false)}
        isDropdownVisible={dropdown}
      />
      <Content>
        <IntroductionSection />
      </Content>

      {/* <Experience
        currentActiveTab={currentActiveTab}
        setUbsActive={() => setCurrentActiveTab("UBS")}
        setJtcActive={() => setCurrentActiveTab("JTC")}
        setActivateActive={() => setCurrentActiveTab("Activate")}
      /> */}
      {/* <Projects /> */}

      <Footer />
    </>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;
