const Filter = ({persons, setNewNameFilter, newNameFilter}) => {
  const handleNameFilterInput = (event) => {
    setNewNameFilter(event.target.value);
  };

  const personsToShow = persons.filter((person) =>
    person.name.includes(newNameFilter)
  );

  return (
    <div>
      filter by name:{" "}
      <input value={newNameFilter} onChange={handleNameFilterInput} />
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.id}>
            {person.name} {person.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
