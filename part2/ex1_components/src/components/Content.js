import Part from "./Part";
import Total from "./Total";
import Header from './Header'


const Content = (props) => {
  return (
    <div>
      <Header text={props.course.name} />
      {props.course.parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
      <Total course={props.course} />
    </div>
  );
};

export default Content;
