import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import { render } from "react-dom";
import styled from "styled-components";

export const Tabs = (props) => {
  const {
    toggleUbs,
    ubsState,
    toggleJtc,
    jtcState,
    toggleActivate,
    activateState,
  } = props;

  const displayUbs = async () => {
    console.log(ubsState);
    if (ubsState) {
      toggleUbs();
      return <TabContent id="UBS">Work at UBS</TabContent>;
    } else {
      toggleUbs();
      return null;
    }
  };

  const displayJtc = async () => {
    if (jtcState) {
      toggleJtc();
      return <TabContent id="UBS">Work at UBS</TabContent>;
    } else {
      toggleJtc();
      return null;
    }
  };

  const displayActivate = async () => {
    if (activateState) {
      toggleActivate();
      return <TabContent id="UBS">Work at UBS</TabContent>;
    } else {
      toggleActivate();
      return null;
    }
  };

  return (
    <MainContainer container>
      <TabButton onClick={toggleUbs}>UBS</TabButton>
      <TabButton onClick={toggleJtc}>JTC Corporation</TabButton>
      <TabButton onClick={toggleActivate}>
        Activate Interactive Pte Ltd
      </TabButton>
      <displayUbs />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  text-align: justify;
`;

const TabButton = styled.button`
  background-color: inherit;
  border: none;
  outline: none;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 1rem;
  font-family: inherit;
`;

const TabContent = styled.div`
  /* display: none; */
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
`;

export default Tabs;
