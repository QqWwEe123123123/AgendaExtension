import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
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
  /* background-color: #a8dadcff; */

  // for testing purposes
  @media (max-width: 768px) {
    margin-top: 0%;
  }
`

export default GlobalStyle