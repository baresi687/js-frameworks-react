import styled from 'styled-components'

const Button = styled.button`
  display: block;
  margin: .5rem 0;
  background-color: ${(props) => (props.color ? props.color : 'brown')};
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: ${(props) => (props.padding ? props.padding : '1rem')};
  width: 100%`

export default Button

export const WarningButton = styled(Button)`
  background-color: lightsalmon;
  
  &:hover {
    background-color: #61dafb;
  }
  
`
