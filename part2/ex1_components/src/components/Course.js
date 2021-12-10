import Content from './Content'

const Course = (props) => {
  return (
    <div>
      {props.courses.map((course => (
        <Content key={course.id} course={course} />
      )))}
    </div>
  )
}

export default Course;