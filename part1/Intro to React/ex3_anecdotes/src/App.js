import React, { useState } from "react";

const Header = ({text}) => <h1>{text}</h1>

const PopularAnecdote = (props) => {
  const maxnum = Math.max(...props.scores)
  const index = props.scores.indexOf(maxnum)

  console.log(index)
  if (maxnum === 0) {
    return <p>No votes yet</p>
  }
  return (
    <div>
      <p>{props.anecdotes[index]}</p>
      <p>has {maxnum} votes</p>
    </div>
  )

}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];


  const [selected, setSelected] = useState(0);
  const [scores, setScores] = useState(Array(anecdotes.length).fill(0));

  const handleSetAnecdotes = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    const newScores = [...scores]
    newScores[selected]++
    setScores(newScores)
  };

  console.log(scores)

  return (
    <div>
      <Header text="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleSetAnecdotes}>Next anecdote</button>
      <Header text="Anecdote with most votes" />
      <PopularAnecdote anecdotes={anecdotes} scores={scores} />
    </div>
  );
};

export default App;
