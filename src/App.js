import "./App.css";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import { DeleteProvider } from "./contexts/DeleteProvider";
import { UpdateProvider } from "./contexts/UpdateProvider";
import { useRecords } from "./hooks/useRecords";

function App() {
  const { records, saveRecord, deleteRecord, updateRecord } = useRecords();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formRecord = new FormData(event.target);
    const record = Object.fromEntries(formRecord.entries());
    saveRecord(record);
  };

  return (
    <main>
      <Form onSubmit={handleSubmit}>
        <h1>Formulário</h1>
      </Form>
      <UpdateProvider value={updateRecord}>
        <DeleteProvider value={deleteRecord}>
          <Table records={records} />
        </DeleteProvider>
      </UpdateProvider>
    </main>
  );
}

export default App;
