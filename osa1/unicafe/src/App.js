import React, { useState } from 'react';

const Good = props => {

};

const Neutral = props => {

};

const Bad = props => {

};

/* const handleClick = ( type, state, setState ) => {
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
 }; */

const FeedbackButton = ( { handleClick, text } ) => <button
    onClick={ handleClick }>{ text }</button>;

const App = () => {
  // tallenna napit omaan tilaansa
  const [ good, setGood ] = useState( 0 );
  const [ neutral, setNeutral ] = useState( 0 );
  const [ bad, setBad ] = useState( 0 );
  const [ total, setTotal ] = useState( [] );

  const handleGoodClick = () => {
    setGood( good + 1 );
    setTotal( [ ...total, 1 ] );
  };
  const handleNeutralClick = () => {
    setNeutral( neutral + 1 );
    setTotal( [ ...total, 0 ] );
  };
  const handleBadClick = () => {
    setBad( bad + 1 );
    setTotal( [ ...total, -1 ] );
  };

  const Statistics = props => {
    return (
        <>
          <h2>Statistics</h2>

          { props.total.length > 0 ? <><p>Good: { good }</p>
                <p>Neutral: { props.neutral }</p>
                <p>Bad: { props.bad }</p>
                <p>All: { props.total.length }</p>
                <p>Average: { average( props.total ) }</p>
                <p>Positive: { ( ( props.good / props.total.length ) * 100 ) } %</p></> :
              <p>No feedback given</p> }
        </>
    );
  };

  const average = ( array ) => array.reduce( ( a, b ) => a + b ) / array.length;

  return (
      <div>
        <h2>Give feedback</h2>
        <FeedbackButton text="Good" handleClick={ () => handleGoodClick() }/>
        <FeedbackButton text="Neutral"
                        handleClick={ () => handleNeutralClick() }/>
        <FeedbackButton text="Bad" handleClick={ () => handleBadClick() }/>

        <Statistics total={total} good={good} neutral={neutral} bad={bad} average={average} />

      </div>

  );
};

export default App;
