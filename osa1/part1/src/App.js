import React from 'react';

const Header = props => {
  return (
      <h1>{ props.course }</h1>
  );
};

const Content = props => {
  return (
      <>
        <Part part={ props.data.part1 } exercises={ props.data.exercises1 }/>
        <Part part={ props.data.part2 } exercises={ props.data.exercises2 }/>
        <Part part={ props.data.part3 } exercises={ props.data.exercises3 }/>
        </>
  );
};

const Part = props => {
  return (
      <p>
        { props.part } { props.exercises }
      </p>

  );
};

const Total = props => {
  return (
      <p>Number of exercises { props.exercises1 + props.exercises2 +
      props.exercises3 }</p>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
      <>
        <Header course={ course }/>
        <Content data={ {part1, part2, part3, exercises1, exercises2, exercises3} }/>
        <Total exercises1={ exercises1 } exercises2={ exercises2 }
               exercises3={ exercises3 }/>
      </>
  );
};

export default App;