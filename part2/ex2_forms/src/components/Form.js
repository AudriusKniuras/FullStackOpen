import db from "../services/db"

const Form = (props) => {
  const handleSetPerson = (event) => {
    event.preventDefault();

    const entryExists = props.persons.find(
      (person) => person.name === props.newName
    );

    if (entryExists !== undefined) {
      alert(`${props.newName} already exists in the phonebook`);
      return;
    }

    const obj = {
      name: props.newName,
      number: props.newNumber,
    };

    db.create(obj).then(responseData => {
      props.setPersons(props.persons.concat(responseData))
      props.setNewName("")
      props.setNewNumber("")
    }).catch(error => alert(`Item could not be added. \n${error}`))
  };

  const handleNameInput = (event) => {
    props.setNewName(event.target.value);
  };

  const handleNumberInput = (event) => {
    props.setNewNumber(event.target.value);
  };

  return (
    <form onSubmit={handleSetPerson}>
      <div>
        name: <input value={props.newName} onChange={handleNameInput} />
      </div>
      <div>
        number: <input value={props.newNumber} onChange={handleNumberInput} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
