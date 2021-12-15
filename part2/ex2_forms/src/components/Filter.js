import db from "../services/db";

const Filter = ({
  persons,
  setNewNameFilter,
  newNameFilter,
  setPersons,
  setResponseStatus,
  setMessage,
}) => {
  const handleNameFilterInput = (event) => {
    setNewNameFilter(event.target.value);
  };

  const personsToShow = persons.filter((person) =>
    person.name.includes(newNameFilter)
  );

  const handleDelete = (person) => {
    if (window.confirm(`Do you want to delete entry: ${person.name}?`)) {
      db.deleteEntry(person.id)
        .then(() => console.log("Successfully deleted"))
        .catch((error) => {
          setResponseStatus("error");
          setMessage(`Could not delete entry\n${error}`);
          setTimeout(() => {
            setResponseStatus("");
            setMessage("");
          }, 5000);
        });
      setPersons(persons.filter((p) => p.id !== person.id));
    }
  };

  return (
    <div>
      filter by name:{" "}
      <input value={newNameFilter} onChange={handleNameFilterInput} />
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}{" "}
            <button onClick={() => handleDelete(person)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
