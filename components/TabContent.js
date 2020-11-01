import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import { render } from "react-dom";
import styled from "styled-components";

export const TabContent = (props) => {
  const { experience } = props;

  var date;
  if (experience.present) {
    date = <Dates>{experience.startDate} - Present</Dates>;
  } else {
    date = (
      <Dates>
        {experience.startDate} - {experience.endDate}
      </Dates>
    );
  }

  return (
    <MainContainer container>
      <CompanyName> {experience.company}</CompanyName>
      <Experience>{experience.role}</Experience>
      {date}
      <ul>
        <li>{experience.firstDescription}</li>
        <li>{experience.secondDescription}</li>
        <li>{experience.thirdDescription}</li>
      </ul>
    </MainContainer>
  );
};

const Dates = styled.p`
  margin: 0;
`;

const Experience = styled.p`
  margin: 0;
`;

const CompanyName = styled.h2`
  margin: 0;
`;

const MainContainer = styled.div`
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  color: #8f929a;
`;
