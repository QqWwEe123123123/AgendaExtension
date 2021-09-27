import styled from 'styled-components'

export const Container = styled.div`
  width: 95%;
  height: 3em;
  margin: 0.1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const LargeSec = styled.div`
  width: 8em;
  height: 2em;
  float: left;
  display: flex;
  flex-direction: column;
`
export const Img = styled.img`
  margin: 0.5em;
  width: 25px;
`

export const BigTextWrapper = styled.h6`
  font-size: 14px;
  font-weight: 300;
  color: #050608;
`

export const SmallTextWrapper = styled.h6`
  font-size: 12px;
  font-weight: 300;
  color: #454c57;
`
export const IconWrapper = styled.div`

  width: 10%;
  margin: 1em;
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HighLight = styled.div`
  width: 0.4em;
  height: 100%;
  border-radius: 35%;
  background-color: ${({color}) => color};
  float: left;
`