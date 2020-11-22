import styled from "styled-components";

export const TabContent = (props) => {
  const { experience, active } = props;

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
      <h2> {experience.company}</h2>
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

const MainContainer = styled.div`
  padding: 6px 12px;
  border-top: none;
  color: black;
  font-weight: 500;
`;
