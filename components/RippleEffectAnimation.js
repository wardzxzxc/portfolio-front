import styled, { keyframes } from "styled-components";

export const RippleEffectAnimation = (props) => {
  return (
    <RippleBackground>
      <SmallCircle />
      <FullCircle />
      <MediumCircle />
      <LargeCycle />
    </RippleBackground>
  );
};

const RippleBackground = styled.div`
  z-index: 1;
`;

const RippleEffect = keyframes`
  0%{
    transform: scale(0.8);
  }
  
  50%{
    transform: scale(1.0);
  }
  
  100%{
    transform: scale(0.8);
  }
`;

const RippleInverseEffect = keyframes`
  0%{
    transform: scale(1.0);
  }
  
  50%{
    transform: scale(0.8);
  }
  
  100%{
    transform: scale(1.0);
  }
`;

const MediumCircle = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 5%;
  border-radius: 100px 100px;
  background: #97566c;
  animation: ${RippleEffect} 10s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
  opacity: 0.8;
  transform-origin: bottom right;
  @media (max-width: 600px) and (min-width: 320px) {
    width: 70px;
    height: 140px;
    border-radius: 70px 0 0 70px;
    right: 0px;
  }
  @media (min-width: 600px) {
    left: 70%;
  }
`;

const FullCircle = styled.div`
  position: absolute;
  border-radius: 150px 150px;
  background-color: #503b52;
  animation: ${RippleEffect} 10s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
  width: 300px;
  height: 300px;
  bottom: 40%;
  opacity: 0.9;
  @media (max-width: 600px) and (min-width: 320px) {
    width: 150px;
    height: 300px;
    border-radius: 150px 0 0 150px;
    transform-origin: right;
    right: 0px;
  }
  @media (min-width: 600px) {
    left: 50%;
  }
`;

const SmallCircle = styled.div`
  position: absolute;
  border-radius: 0 200px 0 0;
  background-color: #d87b6d;
  animation: ${RippleEffect} 10s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
  width: 200px;
  height: 200px;
  left: 0px;
  bottom: 0px;
  opacity: 0.9;
  transform-origin: bottom left;
`;

const LargeCycle = styled.div`
  @media (min-width: 1200px) {
    width: 200px;
    height: 200px;
    position: absolute;
    bottom: 5%;
    border-radius: 100px 100px;
    background: #97566c;
    animation: ${RippleEffect} 10s infinite;
    box-shadow: 0px 0px 1px 0px #508fb9;
    opacity: 0.8;
    right: 2%;
    top: 10%;
  }
`;
