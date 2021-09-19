import React from 'react';

const Header = props => {
  return (
      <h1>{ props.course }</h1>
  );
};

const Content = props => {
  return (
      <>
        { props.parts.map(
            part => <Part name={ part.name } exercises={ part.exercises }/> ) }
      </>
  );
};

const Part = props => {
  return (
      <p>
        { props.name } { props.exercises }
      </p>

  );
};

const Total = props => {
  const parts = props.parts;
  let total = 0;
  parts.forEach(part => total += part.exercises)

  return (
      <>
        <p>Number of exercises { total }</p>
      </>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
      <>
        <Header course={ course.name }/>
        <Content parts={ course.parts }/>
        <Total parts={ course.parts }/>
      </>
  );
};

export default App;