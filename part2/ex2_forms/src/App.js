import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import axios from "axios";
import Message from "./components/Message";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [responseStatus, setResponseStatus] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/api/persons")
      .then((response) => setPersons(response.data))
      .catch((error) => {
        setResponseStatus("error");
        setMessage("Failure to get stuff from db");
      });
  }, []);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newNameFilter, setNewNameFilter] = useState("");

  return (
    <div>
      <h2>Phonebook!</h2>
      <Message message={message} responseStatus={responseStatus} />
      <Form
        persons={persons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
        setResponseStatus={setResponseStatus}
        setMessage={setMessage}
      />
      <Filter
        persons={persons}
        setNewNameFilter={setNewNameFilter}
        newNameFilter={newNameFilter}
        setPersons={setPersons}
        setResponseStatus={setResponseStatus}
        setMessage={setMessage}
      />
    </div>
  );
};

export default App;
