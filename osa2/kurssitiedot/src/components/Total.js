const Total = ( { parts } ) => {
  const totalArr = [];
  parts.forEach( part => totalArr.push( part.exercises ) );
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  let exercisesCount = totalArr.reduce(reducer)

  return (
      <>
        <h4>Total of { exercisesCount } exercises</h4>
      </>
  );
};

export default Total;