import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 5px;
  background-color: ${({ color }) => color};
  height: 2.5rem;
  width: 20em;
  margin: 0.2em;

  box-shadow: rgba(0, 0, 0, 0.10) 0px 9px 28px, rgba(26, 18, 18, 0.07) 0px 5px 10px;

  display: flex;
  align-items: center;
`
export const LargeSec = styled.div`

  width: 8em;
  height: 2em;
  margin: auto;
  float: left;
  display: flex;
  align-items: center;
`

export const SmallSec = styled.div`

  width: 5em;
  height: 2em;
  float: left;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Img = styled.img`
  margin: 0.5em;
  width: 25px;
`

export const TextBox = styled.h6`
  font-size: 12px;
`

export const BigTextBox = styled.h6`
  font-size: 13px;
`
export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`