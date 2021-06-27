import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid;
  margin-top: 20px;
  border-radius: 100px;
  padding: 5px 0px;
  background-color: ${({ color }) => color};
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
`
export const LargeSec = styled.div`
  border-radius: 100px;
  width: 6em;
  height: 2em;
  float: left;
  display: flex;
  align-items: center;
`

export const SmallSec = styled.div`
  border-radius: 100px;
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
export const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Trash = styled.div`
  display: flex;
  justify-content: middle;
`