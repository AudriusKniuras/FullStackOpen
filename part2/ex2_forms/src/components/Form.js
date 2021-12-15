import db from "../services/db";

const Form = (props) => {
  const handleSetPerson = (event) => {
    event.preventDefault();

    const existingPerson = props.persons.find(
      (person) => person.name === props.newName
    );

    const obj = {
      name: props.newName,
      number: props.newNumber,
    };

    if (existingPerson !== undefined) {
      if (
        window.confirm(
          `${existingPerson.name} already exists in the phonebook. Replace number?`
        )
      ) {
        db.update(existingPerson.id, obj)
          .then((responseData) => {
            props.setPersons(
              props.persons.map((person) =>
                person.id === responseData.id ? responseData : person
              )
            );
            props.setResponseStatus("success");
            props.setMessage(`${responseData.name} updated`);
            setTimeout(() => {
              props.setResponseStatus("");
              props.setMessage("");
            }, 5000);
            props.setNewName("");
            props.setNewNumber("");
          })
          .catch((error) => {
            props.setResponseStatus("error");
            props.setMessage(`Item cold not be changed. \n${error}`);
            setTimeout(() => {
              props.setResponseStatus("");
              props.setMessage("");
            }, 5000);
          });
      }
    } else {
      db.create(obj)
        .then((responseData) => {
          props.setPersons(props.persons.concat(responseData));
          props.setNewName("");
          props.setNewNumber("");
          props.setResponseStatus("success");
          props.setMessage(`${responseData.name} added`);
          setTimeout(() => {
            props.setResponseStatus("");
            props.setMessage("");
          }, 5000);
        })
        .catch((error) => {
          props.setResponseStatus("error");
          props.setMessage(`Item cold not be added. \n${error}`);
          setTimeout(() => {
            props.setResponseStatus("");
            props.setMessage("");
          }, 5000);
        });
    }
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
