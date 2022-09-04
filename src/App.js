import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import api from "./services/Api";

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
      <button>Atualizar</button>
      <Form onSubmit={handleSubmit}>
        <h1>Formulário</h1>
      </Form>
      <Table records={records} onDelete={handleDelete} />
    </main>
  );
}

export default App;
