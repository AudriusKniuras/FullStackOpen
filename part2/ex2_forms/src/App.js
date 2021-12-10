import React, { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "39-12-141252", id: 1 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newNameFilter, setNewNameFilter] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <Form
        persons={persons}
        newName={newName}
        setNewName={setNewName}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
        setPersons={setPersons}
      />
      <Filter
        persons={persons}
        setNewNameFilter={setNewNameFilter}
        newNameFilter={newNameFilter}
      />
    </div>
  );
};

export default App;
