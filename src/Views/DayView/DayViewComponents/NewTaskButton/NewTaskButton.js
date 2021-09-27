import React from "react";
import Button from "../../../../Components/Button/Button";
import { TiPlus } from "react-icons/ti";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 2em;

  display: flex;
  justify-content: flex-end;
`;

const NewTaskButton = ({ HandleOnClick }) => {
  const styles = {
    width: "25%",
    padding: "15px",
    borderRadius: "20px",
    margin: "20px 20px 0px 0px",

    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    backgroundColor: "#fe8687ff",
    color: "#feeeee",
    boxShadow: "rgba(0,0,0,0.1) 2px 2px 5px, rgba(0,0,0,0.1) -2px 2px 5px",
    cursor: "pointer",
  };

  const props = {
    style: styles,
    text: "Task",
    isLogo: true,
    logoLeft: false,
    logoComponent: <TiPlus />,
  };
  return (
    <Container onClick={() => HandleOnClick}>
      <Button props={props} />
    </Container>
  );
};

export default NewTaskButton;
