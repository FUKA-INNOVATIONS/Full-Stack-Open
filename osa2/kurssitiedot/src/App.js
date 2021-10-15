import React from 'react';
import Course from './components/Course';

const Total = props => {
  const parts = props.parts;
  let total = 0;
  parts.forEach( part => total += part.exercises );

  return (
      <>
        <p>Number of exercises { total }</p>
      </>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Matti Luukkasen JS-osio',
        exercises: 14,
        id: 4,
      },
    ],
  };

  return (
      <>
        <Course course={ course }/>
      </>
  );
};

export default App;

/*
* <Total parts={ course.parts }/>
* */