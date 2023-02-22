import './App.css';
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="App">
      <Heading name="James" age="31" color="red" fontSize='3rem'/>
      <Paragraph content="nice"/>
      <Heading name="Steve"/>
      <Paragraph>This is children props</Paragraph>
    </div>
  );
}

export default App;
