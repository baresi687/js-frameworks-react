import styled from "styled-components";

const StyledInput = styled.input`
  padding: 1rem .5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 4px solid ${(props) => props.bColor ? props.bColor : props.theme.borderColor};  
  width: 100%`

function Input(props) {
  return (
    <StyledInput placeholder={props.placeholder} bColor={props.bColor}/>
  )
}

export default Input
