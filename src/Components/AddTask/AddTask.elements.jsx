import styled from 'styled-components'

export const TextBox = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: 1px solid;
  border-radius: 10px;
  width: 90%;

  position: absolute;
  bottom: 10px;
  background: #f1faeeff; 
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.div`
  margin: auto;
  padding: 4px;
  cursor: pointer;
`
// popUp ------------------------------------------------------

export const Background = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const PopUpContent = styled.div`
  width: 20em;
  height: 10em;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #f1faeeff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  padding: 10px;


  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const PopUpTextBox = styled.input`
  width: 100%;
  font-size: inherit;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const PopUpTextWrapper = styled.div`
  padding: 5px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.input`
  cursor: pointer;
  border-radius: 10px;
  width: 85%;
  padding: 12px;
  margin: 10px 5px;
  background-color: ${({ color }) => color};
  border: none;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`

export const Caption = styled.caption`
  position: absolute;
  width: 30%;
  border: 1px solid black;
  box-sizing: border-box;
  bottom: 100%;
  right: 5px;
  background-color: #1D3557;
  color: #fff;
  border-radius: 3px;
`

