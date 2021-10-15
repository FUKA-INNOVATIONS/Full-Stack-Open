import Header from './Header';
import Content from './Content';

const Course = ( { course } ) => {
  return (
      <>
        <Header courseName={ course.name }/>
        <Content courseParts={ course.parts }/>
      </>
  );
};

export default Course;