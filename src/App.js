import { DayPanel } from "./Components";
import { Container } from "./GlobalStyles";
import { Datetime } from "./Components";
import GlobalStyle from "./GlobalStyles";

import { React, useState, useEffect } from "react";
import Admin from "./Admin";

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      ></link>
      <GlobalStyle />
      <Container>
        <Admin />
      </Container>
    </>
  );
}

export default App;
