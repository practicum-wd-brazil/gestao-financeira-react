import { useEffect, useState, createContext } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import api from "./services/Api";

export const DeleteContext = createContext();

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    api.getAll().then((apiRecords) => {
      setRecords(apiRecords);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formRecord = new FormData(event.target);
    const record = Object.fromEntries(formRecord.entries());
    api.save(record).then((savedRecord) => {
      setRecords([...records, savedRecord]);
    });
  };

  const handleDelete = (id) => {
    api.remove(id).then(() => {
      setRecords(records.filter((record) => record._id !== id));
    });
  };

  return (
    <main>
      <Form onSubmit={handleSubmit}>
        <h1>Formulário</h1>
      </Form>
      <DeleteContext.Provider value={handleDelete}>
        <Table records={records} />
      </DeleteContext.Provider>
    </main>
  );
}

export default App;
