import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "39-12-141252", id: 1 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newNameFilter, setNewNameFilter] = useState("");

  const handleSetPerson = (event) => {
    event.preventDefault();

    const entryExists = persons.find((person) => person.name === newName);

    if (entryExists !== undefined) {
      alert(`${newName} already exists in the phonebook`);
      return;
    }

    const obj = {
      name: newName,
      phone: newPhone,
      id: persons.length+1,
    };

    setPersons(persons.concat(obj));
    setNewName("");
    setNewPhone("");
  };

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneInput = (event) => {
    setNewPhone(event.target.value);
  };

  const handleNameFilterInput = (event) => {
    setNewNameFilter(event.target.value);
  };

  const personsToShow = persons.filter(person => person.name.includes(newNameFilter))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter name: <input value={newNameFilter} onChange={handleNameFilterInput} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={handleSetPerson}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
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

export default App;
