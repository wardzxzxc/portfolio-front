import styled from "styled-components";
import { TabContent } from "./TabContent";
import React, { useState } from "react";
export const Tabs = (props) => {
  const {
    currentActiveTab,
    setUbsActive,
    setJtcActive,
    setActivateActive,
  } = props;

  const ubsExperience = {
    company: "UBS AG",
    startDate: "Jul 2020",
    endDate: null,
    present: true,
    role: "Graduate Trainee (Data Engineer)",
    department: "Finance IT, Group Technology",
    firstDescription:
      "Worked with a global team that does ETL on Financial Data as part of financial reporting",
    secondDescription:
      "Developed ETL processes using PL/SQL to extract sample datasets as part of the implementation of CI/CD",
    thirdDescription:
      "Led the team in Technical Writing of current systems and processes",
  };

  const jtcExperience = {
    company: "JTC Corporation",
    startDate: "Jan 2019",
    endDate: "Jun 2019",
    present: false,
    role: "App Developer Intern",
    department: "Estate App",
    firstDescription:
      "Built a full-stack mobile app that provides users with a platform to report cyber incidents, using Ionic, Express.js and MongoDb, which aims to cut down duration needed to file a report",
    secondDescription:
      "Developed different sets of REST APIs for client tier to consume using Express.js",
    thirdDescription:
      "Designed software architecture using microservices architecture and deployed it with Docker and Microsoft Azure",
  };

  const activateExperience = {
    company: "Activate Interactive Pte Ltd",
    startDate: "May 2018",
    endDate: "Jul 2018",
    present: false,
    role: "App Developer Intern",
    department: null,
    firstDescription:
      "Created visual mock-ups of websites based on UI/UX designs using HTML, CSS, and Bootstrap, in order to test feasibility of designs",
    secondDescription:
      "Developed responsive and interactive mobile app components based on the UI/UX designs, with React Native and linked it with the REST APIs exposed",
    thirdDescription:
      "Worked in a team of 2 to implement biometric login and PDF generation using modules found in npm",
  };

  var activeTabDisplay;
  if (currentActiveTab == "UBS") {
    //setActiveTab("UBS");
    activeTabDisplay = <TabContent experience={ubsExperience} />;
  } else if (currentActiveTab == "JTC") {
    //setActiveTab("JTC");
    activeTabDisplay = <TabContent experience={jtcExperience} />;
  } else {
    //setActiveTab("Activate");
    activeTabDisplay = <TabContent experience={activateExperience} />;
  }

  return (
    <MainContainer container>
      <TabButton
        id="UBS"
        onClick={setUbsActive}
        active={"UBS" === currentActiveTab}
      >
        UBS AG
      </TabButton>
      <TabButton
        id="JTC"
        onClick={setJtcActive}
        active={"JTC" === currentActiveTab}
      >
        JTC Corporation
      </TabButton>
      <TabButton
        id="Activate"
        onClick={setActivateActive}
        active={"Activate" === currentActiveTab}
      >
        Activate Interactive Pte Ltd
      </TabButton>
      {activeTabDisplay}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  overflow: hidden;
  text-align: justify;
`;

const TabButton = styled.button`
  border: none;
  outline: none;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 1rem;
  font-family: inherit;
  background-color: white !important;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "2px solid black" : null)};
`;

export default Tabs;
