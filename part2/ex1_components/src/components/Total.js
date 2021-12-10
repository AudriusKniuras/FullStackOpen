const Total = (props) => {
  const total = props.course.parts.reduce((prevValue, curValue) => prevValue+curValue.exercises, 0)

  return (
    <p><b>total of {total} exercises</b></p>
  )
}

export default Total;