import React from "react";

function VoteButton({person, handleVoting}) {
  return (
    <button onClick={() => handleVoting(person)}>Vote for {person}</button>
  )
}

export default VoteButton
