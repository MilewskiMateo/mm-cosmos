import React from "react";
import MainContent from "./components/MainContent";
import styled from "styled-components";


export default function App() {
  return (
    <Background>
      <Ring x={"-12%"} y={"42%"}></Ring>
      <Ring x={"33%"} y={"-26%"}></Ring>
      <Ring x={"88%"} y={"15%"}></Ring>
      <Dot x={"6%"} y={"19%"} color={"#E34A67"}></Dot>
      <Dot x={"60%"} y={"10%"} color={"#00C9B7"}></Dot>
      <Dot x={"87%"} y={"71%"} color={"#E34A67"}></Dot>
      <Dot x={"53%"} y={"85%"} color={"#7860D7"}></Dot>
      <MainContent />
    </Background>
  );
}

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Dot = styled.div`
  position: absolute;
  left: ${(props) => props.x};
  top: ${(props) => props.y};
  width: 8px;
  height: 8px;
  border: none;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const Ring = styled.div`
  position: absolute;
  left: ${(props) => props.x};
  top: ${(props) => props.y};
  height: 300px;
  width: 300px;
  background-image: linear-gradient(135deg, #2b2347 0%, #221b3a 100%);
  border-radius: 50%;

  ::after {
    content: "";
    position: absolute;
    top: calc(50% - 115px);
    left: calc(50% - 115px);
    height: 230px;
    width: 230px;
    background-color: #221b3a;
    border-radius: 50%;
  }
`;
