import './App.css';
import {ThemeProvider} from "styled-components";
import Button from "./compontents/Button";
import PageHeading from "./compontents/PageHeading";
import Container from "./compontents/layout/Container";
import Form from "./compontents/form/Form";
import Input from "./compontents/form/Input";

const theme = {
  primaryColor: 'green',
  secondaryColor: 'orange',
  borderColor: 'red'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <PageHeading>Register</PageHeading>
        <Form>
          <Input placeholder="Name" bColor="blue"/>
          <Input placeholder="City"/>
          <Button color={'darkblue'}>Hello</Button>
          <Button color={'darkred'} padding={'2rem'}>Hello</Button>
        </Form>
      </Container>
    </ThemeProvider>
  );
}

export default App;
