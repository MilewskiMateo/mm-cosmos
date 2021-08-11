import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Tile from "./Tile";
import planet from "../images/Planet.png";
import rocket from "../images/Rocket.png";
import Crew from "../images/Crew.png";
import Capsules from "../images/Capsules.png";
import Rockets from "../images/Rockets.png";
import Starlink from "../images/Starlink.png";
import logo1 from "../images/logo1.svg";
import logo2 from "../images/logo2.svg";
import rightCloud from "../images/rightCloud.svg";
import leftCloud from "../images/leftCloud.svg";
import landingGear from "../images/landingGear.svg";

function MainContent() {
  const contents = ["Capsules", "Crew", "Rockets", "Starlink"];
  const images = [Capsules, Crew, Rockets, Starlink];
  const [startAnimation, setStartAnimation] = useState(false);

  const handleLaunchButton = () => {
    setStartAnimation(true);
    setTimeout(() => {
      setStartAnimation(false);
    }, 15000);
  };

  return (
    <div>
      <Header>
        <Logo1 src={logo1} alt={"logo part1"} />
        <Logo2 src={logo2} alt={"logo part2"} />
      </Header>
      <TileGrid>
        {contents.map((c, idx) => {
          return <Tile key={idx} content={c} img={images[idx]} />;
        })}
      </TileGrid>
      <PlanetImg src={planet} alt="planet" />
      <LandingImagesDiv startAnimation={startAnimation}>
        <img src={leftCloud} alt="cloud" width="65px" height="62px" />
        <img
          src={landingGear}
          alt={"Landing gear"}
          width="68px"
          height="23px"
        />
        <img src={rightCloud} alt="cloud" width="52px" height="50px" />
      </LandingImagesDiv>
      <RocketDiv startAnimation={startAnimation}>
        <RocketImg startAnimation={startAnimation} src={rocket} alt="rocket" />
      </RocketDiv>

      <LaunchButton onClick={handleLaunchButton} disabled={startAnimation}>
        Launch Rocket!
      </LaunchButton>
      <MyFotter>
        <div>Nowy z nowym</div>
        <div>Zmiana kogoś innego</div>
      </MyFotter>
    </div>
  );
}

export default MainContent;

const Header = styled.header`
  position: absolute;
  width: 116px;
  height: 23.98px;
  left: 11.4%;
  top: 4%;
`;
const Logo1 = styled.img`
  position: absolute;
  top: 7px;
`;
const Logo2 = styled.img`
  position: absolute;
`;

const TileGrid = styled.div`
  position: absolute;
  width: 350px;
  height: 448px;
  left: 18%;
  top: 20%;
  display: grid;
  grid-template-columns: 160px 160px;
  grid-column-gap: 30px;
  grid-row-gap: 32px;
`;

const LaunchButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 32px;
  cursor: pointer;

  position: absolute;
  left: 64.31%;
  right: 22.92%;
  top: 72.92%;
  bottom: 20.83%;

  background: #7860d7;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  border: none;
  transition: background-color 0.2s linear;

  :hover {
    background-color: #544396;
  }
  :disabled {
    background-color: #635c80;
    color: black;
    cursor: unset;
  }
`;

const shake = keyframes`
0%,100% {
  transform: translateX(-1px);
}50%{
  transform: translateX(1px)
}
`;
const fly = keyframes`
0%,100% {
  transform: translateY(0);
}40%,60%{
  transform: translateY(-600px)
}
`;

const RocketDiv = styled.div`
  position: absolute;
  left: 67%;
  top: 12%;
  animation: ${(props) => (props.startAnimation ? fly : " none")};
  animation-duration: 15s;
  animation-timing-function: ease;

  ::before {
    display: ${(props) => (props.startAnimation ? "block" : " none")};
    content: "";
    position: absolute;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 100px;
    background: linear-gradient(#544396, transparent);
  }
`;

const RocketImg = styled.img`
  width: 102px;
  height: 140px;
  animation: ${(props) => (props.startAnimation ? shake : " none")};
  animation-duration: 0.2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`;

const cloudsAnimation = keyframes`
  0%,100%{ opacity: 1; }
  20%,80% { opacity: 0; }
`;

const LandingImagesDiv = styled.div`
  position: absolute;
  left: 63.5%;
  top: 24%;
  width: 190px;
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  animation: ${(props) => (props.startAnimation ? cloudsAnimation : " none")};
  animation-duration: 15s;
  animation-timing-function: ease;
  img {
    width: auto;
    height: auto;
  }
`;

const PlanetImg = styled.img`
  position: absolute;
  height: 372px;
  width: 375px;
  left: 58%;
  top: 21%;
  border-radius: 0px;
`;
const MyFotter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  left: 11.4%;
  top: 94%;
  width: 77%;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.4px;

  color: #8d7fbc;
`;
