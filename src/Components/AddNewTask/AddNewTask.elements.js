import styled from 'styled-components'

export const NewTaskContainer = styled.div`
  width: 100%;
  height: 2em;

  display: flex;
  justify-content: flex-end;
`

export const NewTaskWrapper = styled.div`
  width: 30%;
  padding: 15px 0px;
  border-radius: 5px;
  margin-top: 5px;

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
export const Panel = styled.div`
  z-index: 10;
  background-color: #fff;
  border: 1px solid #b7b7b7;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 60px 60px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TitleWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
`

export const SubTitleWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
`

export const SubTitle = styled.h1`
  font-size: 14px;
  font-weight: 400;
`

export const InputWrapper = styled.div`
  border: 1px solid #a4a7b5;
  border-radius: 50px;
  height: 50%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InputContainer = styled.div`
  width: 75%;
  height: 15%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  font-size: 12px;
  font-weight: 300px;
`

export const InputColContainer = styled.div`
  width: 45%;
  height: 100%;
`

export const InputTitleWrapper = styled.div`
  font-size: 12px;
  font-weight: 300px;
  width: 100%;

  position: relative;
  left: 20px;
  top: 10px;
`

export const InputText = styled.input`
  width: 80%;
  position: relative;
  left: 20px;

  outline: none;
  border: none;

  &::placeholder {
    font-size: 11px;
  }
`

export const InputDateTime = styled.input`
  border: none;
  outline: none;
  font-size: 11px;
`

export const InputButtonContainer = styled.div`
  width: 75%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const InputButtonWrapper = styled.div`
  border-radius: 50px;
  outline: none;
  border: none;
  width: 28%;
  height: 40%;
  background: ${({Bcolor}) => Bcolor};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: 400px;
  color: ${({color}) => color};

  &:hover {
    background: ${({highlight}) => highlight};
    color: white;
  }
  transition: all 0.2s ease-out;;
`