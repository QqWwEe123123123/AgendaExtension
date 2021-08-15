import styled from 'styled-components'

export const NewTaskContainer = styled.div`
  width: 100%;
  height: 2em;

  display: flex;
  justify-content: flex-end;
`

export const NewTaskWrapper = styled.div`
  width: 25%;
  padding: 15px;
  border-radius: 20px;
  margin: 20px 20px 0px 0px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background: #fe8687ff;
  color: #feeeee;
  box-shadow: rgba(0,0,0,0.1) 2px 2px 5px, rgba(0,0,0,0.1) -2px 2px 5px;
  cursor: pointer;
`

export const NewTaskText = styled.h1`
  padding: 5px;

  font-size: 14px;
  font-weight: 300;

  display: flex;
  align-items: center;
`