import React, { useState } from "react";
import styled from "styled-components";
import MyModal from "./MyModal";

const Tile = ({ content, img }) => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    fetch(`https://api.spacexdata.com/v4/${content}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <TileContainer content={content} alt={content}>
      <TileButtonLayer onClick={handleOpen} img={img}>
        {content}
      </TileButtonLayer>
      <MyModal
        content={content}
        data={data}
        open={open}
        closeHandler={handleClose}
      />
    </TileContainer>
  );
};

export default Tile;

const TileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 208px;
  width: 160px;
  border-radius: 16px;
`;

const TileButtonLayer = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: linear-gradient(360deg, #2b224a 0%, rgba(43, 34, 74, 0) 100%),
    url(${(props) => props.img});
  background-size: 100% 100%;
  border: none;
  color: white;
  padding-top: 120px;
  position: relative;
  z-index: 1;

  ::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    border-radius: 16px;
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;

    background: linear-gradient(
        0deg,
        rgba(43, 34, 74, 0.92) 7.69%,
        rgba(70, 58, 113, 0.92) 100%
      ),
      url(${(props) => props.img});
    background-size: 100% 100%;
    backdrop-filter: blur(4px);
  }

  :hover::before {
    opacity: 1;
  }

  ::after {
    opacity: 0;
    transition: opacity 0.5s linear;
    transition: top 0.3s linear;
    content: "Details";
    color: white;
    position: absolute;
    top: 80%;
    right: 0;
    bottom: 0;
    left: 0;
  }

  :hover::after {
    opacity: 1;
    top: 50%;
    padding-top: 0;
  }
  :hover {
    padding-top: 0px;
    color: transparent;
    cursor: pointer;
  }
`;
