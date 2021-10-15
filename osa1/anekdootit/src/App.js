import React, { useState } from 'react';

const Button = ( { handleClick, text } ) => <button
    onClick={ handleClick }>{ text }</button>;

const Anecdote = ( { header, title, votesCount } ) => {
  return (
      <>
        <h3>{ header }</h3>
        <p>{ title }</p>
        <p>has { votesCount } votes</p>
      </>
  );
};

const App = () => {

  // Generate random number limited by array length
  const randomGenerator = () => Math.floor(
      Math.random() * anecdotes.length );

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
  ];
  const initialVotes = [ 0, 0, 0, 0, 0, 0, 0 ];

  const [ selected, setSelected ] = useState( randomGenerator );
  const [ votes, setVotes ] = useState( initialVotes );

  const voteHandler = () => {
    const copy = [ ...votes ];
    copy[ selected ] += 1;
    setVotes( copy );
  };

  // Get index of element with max votes
  const maxVotesIndex = votes.indexOf( Math.max.apply( null, votes ) );
  //console.log(Math.max.apply( null, votes))

  return (
      <div>
        <Anecdote header={'Anacdote of the day'} title={anecdotes[ selected ]} votesCount={votes[ selected ]} />
        <Button text={ 'vote' } handleClick={ voteHandler }/>
        <Button text={ 'next anecdote' }
                handleClick={ () => setSelected( randomGenerator ) }/>

        <Anecdote header={'Anecdote with most votes'} title={anecdotes[maxVotesIndex]} votesCount={votes[maxVotesIndex]} />
        {/*Math.max.apply(null, votes) === 0 ? <h3>No votes yet!</h3> : <Anecdote header={'Anecdote with most votes'} title={anecdotes[maxVotesIndex]} votesCount={votes[maxVotesIndex]} />*/}

      </div>
  );
};

export default App;
