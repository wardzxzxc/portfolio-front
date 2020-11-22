import styled, { keyframes } from "styled-components";

export const RippleEffectAnimation = (props) => {
  return (
    <RippleBackground>
      <SmallCircle />
      <MediumCircle />
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

const MediumCircle = styled.div`
  width: 400px;
  height: 400px;
  left: 0px;
  bottom: 0px;
  position: absolute;
  border-radius: 0 400px 0 0;
  background: #97566c;
  animation: ${RippleEffect} 10s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
  opacity: 0.8;
  transform-origin: bottom left;
  z-index: 1;
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
  z-index: 2;
`;
