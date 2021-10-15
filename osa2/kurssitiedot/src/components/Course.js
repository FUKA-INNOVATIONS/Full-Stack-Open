import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ( { course } ) => {
  return (
      <>
        <Header courseName={ course.name }/>
        <Content courseParts={ course.parts }/>
        <Total parts={ course.parts }/>
      </>
  );
};

export default Course;