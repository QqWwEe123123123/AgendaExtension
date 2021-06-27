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
export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
  width: 85%;

  position: absolute;
  bottom: 0; 
  &:hover {
    box-shadow: 12px 1px 11px thistle;
  }
`

export const DueDateContainer = styled.div`
  width: 260px;
  background-color: #ccc;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  margin-left: -250px;
  margin-bottom: 30px;
  
  &:hover {
    box-shadow: 12px 1px 21px thistle;
  }
`

export const PopupContainer = styled.div`
  position: relative;
  display: inline-block;
`
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;

  bottom: 0; 
  &:hover {
    box-shadow: 12px 1px 11px thistle;
  }
`

export const Button = styled.input`
  border-radius: 10px;
  padding: 4px;
  outline: none;
  border: none;
  background-color: #a4c2f4ff;
  color: #fff;
  &:hover {
    box-shadow: 8px 2px 21px thistle;
  }
`

export const Icon = styled.div`
  margin: auto;
  padding: 4px;
  cursor: pointer;
`