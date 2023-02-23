import './App.css';
import SomeComponentForStates from "./components/SomeComponentForStates";
import ProfileImage from "./components/ProfileImage,js";
import profile1 from './assets/profile-1.jpg'
import profile2 from './assets/profile-2.jpg'
import VoteButton from "./components/VoteButton";
import VoteStatus from "./components/VoteStatus";
import {useState} from "react";
function App() {
  const [steveVotes, setSteveVotes] = useState(0)
  const [mikeVotes, setMikeVotes] = useState(0)

  function handleVoting(name) {
    if (name === 'Mike') {
      setMikeVotes(mikeVotes + 1)
    }

    if (name === 'Steve') {
      setSteveVotes(steveVotes + 1)
    }

  }

  return (
    <>
      <div className="profiles">
        <div>
          <VoteStatus person="Steve" count={steveVotes} />
          <ProfileImage src={profile1} altText="Steve"/>
          <VoteButton person="Steve" handleVoting={handleVoting}/>
        </div>
        <div>
          <VoteStatus person="Mike" count={mikeVotes}/>
          <ProfileImage src={profile2} altText="Mike"/>
          <VoteButton person="Mike" handleVoting={handleVoting}/>
        </div>
      </div>
      <div className="App">
        <SomeComponentForStates/>
      </div>
    </>
  );
}

export default App;
