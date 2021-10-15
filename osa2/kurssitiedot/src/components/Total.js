const Total = ( { parts } ) => {
  let total = 0;
  parts.forEach( part => total += part.exercises );

  return (
      <>
        <h4>Number of exercises { total }</h4>
      </>
  );
};

export default Total;