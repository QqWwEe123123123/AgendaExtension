import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Titillium Web', sans-serif;
      font-size: 14px;
  }
`

export const Container = styled.div`
  z-index: 0;
  width: 350px; 
  height: 500px;
  
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  justify-content: center;
  position: relative;

  border: 2px solid;

  margin-top: 5%;
  background-color: #a8dadcff;

  // for testing purposes
  @media (max-width: 768px) {
    margin-top: 0%;
  }
`

export default GlobalStyle