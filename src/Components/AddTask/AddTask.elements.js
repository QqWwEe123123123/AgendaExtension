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
  justify-content: center;
`

export const Icon = styled.div`
  margin: auto;
  padding: 4px;
  cursor: pointer;

  &:hover {
    transform: translateY(-10%);
  }
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
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 56px;
  margin: 5px;
  width: 85%;
  height: 45px;
  line-height: 45px;
  border-radius: 7px;
  background-color: ${({ color }) => color};
  color: white;
  font-weight: 400;
  font-size: 16px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;

  :hover{
    background-color: ${({ HLcolor }) => HLcolor};
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    color: #000;
  }

  :active {
    box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);
    transform: translateY(2px);
  }
`

export const Caption = styled.div`
  position: absolute;
  width: 30%;
  border: 1px solid black;
  bottom: 100%;
  right: 5px;
  background-color: #1D3557;
  color: #fff;
  border-radius: 3px;
  text-align: center;
`