import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ( {course} ) => {
  return (
      <div className={`courseItem-${course.id}`}>
        <Header courseName={ course.name }/>
        <Content courseParts={ course.parts }/>
        <Total parts={ course.parts }/>
      </div>
  );
};

export default Course;