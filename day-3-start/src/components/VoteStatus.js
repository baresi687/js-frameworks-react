import React from "react";

function VoteStatus({person, count}) {
  return (
    <h2>{person} Votes: {count}</h2>
  )
}

export default VoteStatus
