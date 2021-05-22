import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import styled, { keyframes } from "styled-components";
import arrowDown from "../images/arrowDown.svg";
import arrowUp from "../images/arrowUp.svg";
import arrows from "../images/arrows.svg";
import xImg from "../images/x.svg";

const MyModal = ({ content, closeHandler, open, data }) => {
  const [extractedData, setExtractedData] = useState(null);
  const [sortedBy, setSortedBy] = useState(["unsorted", "unsorted"]);
  const [icon, setIcon] = useState([arrows, arrows]);

  useEffect(() => {
    if (data !== undefined) {
      switch (content) {
        case "Crew":
          setExtractedData(data.map((d) => [d.name, d.status]));
          break;
        case "Rockets":
          setExtractedData(data.map((d) => [d.name, d.type]));
          break;
        case "Capsules":
          setExtractedData(data.map((d) => [d.serial, d.status]));
          break;
        case "Starlink":
          setExtractedData(
            data.map((d) => [
              d.spaceTrack.OBJECT_NAME,
              d.spaceTrack.LAUNCH_DATE,
            ])
          );
          break;
        default:
          throw new Error("No content passed");
      }
    }
  }, [data, content]);

  const handleSortButton = (id) => {
    let tmpSortedBy = ["unsorted", "unsorted"];
    let tmpIcon = [arrows, arrows];

    if (sortedBy[id] === "ascending") {
      setExtractedData(extractedData.sort((a, b) => (a[id] > b[id] ? -1 : 1)));
      tmpSortedBy.splice(id, 1, "descending");
      tmpIcon.splice(id, 1, arrowDown);
    } else if (sortedBy[0] === "descending") {
      setExtractedData(extractedData.sort((a, b) => (a[id] > b[id] ? 1 : -1)));
      tmpSortedBy.splice(id, 1, "ascending");
      tmpIcon.splice(id, 1, arrowUp);
    } else {
      setExtractedData(extractedData.sort((a, b) => (a[id] > b[id] ? 1 : -1)));
      tmpSortedBy.splice(id, 1, "ascending");
      tmpIcon.splice(id, 1, arrowUp);
    }
    setSortedBy(tmpSortedBy);
    setIcon(tmpIcon);
  };

  return (
    <Modal open={open} onClose={closeHandler}>
      <ModalContainer>
        <ModalTitle>
          <div>{content}</div>
          <button onClick={closeHandler}>
            <img src={xImg} alt={"close"} />
          </button>
        </ModalTitle>
        <ListHeader>
          <SortButton
            onClick={() => handleSortButton(0)}
            sortedBy={sortedBy[0]}
          >
            <div>Type</div>

            <img src={icon[0]} alt="ascending or descending icon" />
          </SortButton>
          <SortButton
            onClick={() => handleSortButton(1)}
            sortedBy={sortedBy[1]}
          >
            <div>Status</div>

            <img src={icon[1]} alt="ascending or descending icon" />
          </SortButton>
        </ListHeader>

        {extractedData ? (
          <ScrollDiv elementsNum={extractedData.length}>
            {extractedData.map((d, idx) => (
              <MapElement key={idx}>
                <LeftDiv>{d[0]}</LeftDiv>
                <RightDiv>{d[1]}</RightDiv>
              </MapElement>
            ))}
          </ScrollDiv>
        ) : (
          <LoadingSpinner></LoadingSpinner>
        )}
      </ModalContainer>
    </Modal>
  );
};
export default MyModal;

const ModalContainer = styled.div`
  position: absolute;
  width: 540px;
  height: 360px;
  padding: 20px 24px 24px 24px;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background: linear-gradient(0deg, #2b224a, #2b224a), #ffffff;
  border: 1px solid #342957;
  box-shadow: 0px 12px 32px rgba(22, 13, 49, 0.4);
  border-radius: 16px;
`;

const spin = keyframes`
from{
  transform: rotate(0deg);
}to{
  transform: rotate(360deg);
}
`;
const LoadingSpinner = styled.div`
  width: 2rem;
  height: 2rem;
  border: 5px solid #f3f3f3;
  border-top: 6px solid #9c41f2;
  border-radius: 100%;
  margin: auto;
  animation: ${spin} 1s infinite linear;
`;
const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 492px;
  height: 32px;
  left: 490px;
  top: 216px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;

  button {
    background-color: transparent;
    border: none;
    color: #c3b8e8;
    font-size: 1em;
    text-align: center;
    cursor: pointer;
  }
`;
const SortButton = styled.button`
  width: 50%;
  height: 40px;
  color: #a094c6;
  border-radius: 4px;
  border: 0px;
  text-align: left;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  background-color: #342a56;
  padding: 10px 16px 10px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  :hover {
    background-color: #251d42;

    img {
      display: block;
    }
  }
  img {
    display: ${(props) => (props.sortedBy === "unsorted" ? "none" : "block")};
  }
`;

const ListHeader = styled.div`
  display: flex;
  height: 40px;
  margin-top: 16px;
  background-color: #342a56;
  border-radius: 4px;
`;

const ScrollDiv = styled.div`
  height: 210px;
  margin-top: 16px;
  overflow-y: ${(props) => (props.elementsNum > 5 ? "scroll" : "hidden")};
`;

const MapElement = styled.li`
  display: flex;
  padding: 0 14px 28px 14px;
  div {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #d2cbe9;
  }
`;

const LeftDiv = styled.div`
  width: 50%;
`;
const RightDiv = styled.div`
  width: 50%;
  padding: 0 20px 0 20px;
`;
