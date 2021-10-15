import Part from './Part'

const Content = ( { courseParts } ) => {
  return (
      <>
        { courseParts.map(
            part => <Part key={ part.id } name={ part.name }
                          exercises={ part.exercises }/> ) }
      </>
  );
};

export default Content;