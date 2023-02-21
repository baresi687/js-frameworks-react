import './App.css';
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Hobbies from "./components/Hobbies";

function App() {
  const paraGraphContent = 'Aenean luctus turpis posuere, tempus augue eu, gravida ligula. Maecenas tempor quam vitae neque gravida commodo. Vestibulum pulvinar ipsum a urna vestibulum, eget lobortis metus ullamcorper.'

  return (
    <div className="App container">
      <Heading title="Johnny"/>
      <Paragraph content={paraGraphContent} />
      <Hobbies/>
    </div>
  );
}

export default App;
