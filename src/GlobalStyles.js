import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* Font weight
    Thin: 100,
    Light: 300,
    Regular: 400,
    Medium: 500,
    Bold: 700,
    Black: 900
  */
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
  }
`

export const Container = styled.div`
  z-index: 0;
  width: 350px; 
  height: 500px;
  
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  position: relative;

  border: 2px solid;

  margin-top: 5%;

  // for testing purposes
  @media (max-width: 768px) {
    margin-top: 0%;
  }
`

export default GlobalStyle