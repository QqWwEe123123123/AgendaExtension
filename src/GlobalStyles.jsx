import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Titillium Web', sans-serif;
  }
`

export const Container = styled.div`
  z-index: 1;
  width: 350px; 
  height: 500px;
  
  margin-right: auto;
  margin-left: auto;
  padding-right: 25px;
  padding-left: 25px;
  border: 2px solid;
  justify-content: center;
`

export default GlobalStyle