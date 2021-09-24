import React, { useState } from 'react';

// Average calculator
const average = ( array ) => array.reduce( ( a, b ) => a + b ) / array.length;

const Button = ( { handleClick, text } ) => <button onClick={ handleClick }>{ text }</button>;

const StatisticLine = props => <p>{ props.text }: { props.value } { props.children }</p>;

const Statistics = ( { good, neutral, bad, total } ) => {
  return (
      <>
        <h3>Statistics</h3>

        { total.length > 0 ?
            <>
              <StatisticLine text={ 'Good' } value={ good }/>
              <StatisticLine text={ 'Neutral' } value={ neutral }/>
              <StatisticLine text={ 'Bad' } value={ bad }/>
              <StatisticLine text={ 'All' } value={ total.length }/>
              <StatisticLine text={ 'Average' }
                             value={ average( total ) }/>
              <StatisticLine text={ 'Positive' }
                             value={ ( good / total.length ) * 100 }>%</StatisticLine>
            </> :
            <p>No feedback given</p> }
      </>
  );
};

const App = () => {
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

  const handleVoteClick = (oldState, newState, value ) => {

  }

  return (
      <div className={ 'main' }>
        <h2>Give feedback</h2>

        <Button text="Good" handleClick={ () => handleGoodClick() }/>
        <Button text="Neutral" handleClick={ () => handleNeutralClick() }/>
        <Button text="Bad" handleClick={ () => handleBadClick() }/>

        <Statistics total={ total } good={ good } neutral={ neutral }
                    bad={ bad } average={ average }/>

      </div>

  );
};

export default App;
