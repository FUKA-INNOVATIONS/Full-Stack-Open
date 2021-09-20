import React, { useState } from 'react';

const Good = props => {

};

const Neutral = props => {

};

const Bad = props => {

};

const handleClick = ( type, state, setState ) => {
  switch ( type ) {
    case 'good':
      setState( state + 1 );
      break;
    case 'neutral':
      setState( state + 1 );
      break;
    case 'bad':
      setState( state - 1 );
      break;
    default:
      return state;
  }
};

const FeedbackButton = ( { handleClick, text } ) => <button
    onClick={ handleClick }>{ text }</button>;

const App = () => {
  // tallenna napit omaan tilaansa
  const [ good, setGood ] = useState( 0 );
  const [ neutral, setNeutral ] = useState( 0 );
  const [ bad, setBad ] = useState( 0 );

  return (
      <div>
        <h2>Give feedback</h2>
        <FeedbackButton text="Good"
                        handleClick={ () => handleClick( 'good', good,
                            setGood ) }/>
        <FeedbackButton text="Neutral"
                        handleClick={ () => handleClick( 'neutral', neutral,
                            setNeutral ) }/>
        <FeedbackButton text="Bad" handleClick={ () => handleClick( 'bad', bad,
            setBad ) }/>
        <h2>Statistics</h2>
        <h3>Good: { good }</h3>
        <h3>Neutral: { neutral }</h3>
        <h3>Bad: { bad }</h3>
      </div>
  );
};

export default App;
