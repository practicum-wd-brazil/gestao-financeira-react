import { useDelete } from "../../../contexts/DeleteProvider";
import { useState } from "react";
import { useUpdate } from "../../../contexts/UpdateProvider";

export default function TableRow({ row }) {
  const [editMode, setEditMode] = useState(false);

  return editMode ? (
    <EditRow record={row} onCancelUpdate={() => setEditMode(false)} />
  ) : (
    <StaticRow record={row} onUpdate={() => setEditMode(true)} />
  );
}

const StaticRow = ({ record, onUpdate }) => {
  const handleDelete = useDelete();
  const { date, description, value, _id } = record;
  return (
    <tr>
      <td className="data">{date}</td>
      <td className="descricao">{description}</td>
      <td className="valor">{value}</td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn-delete">
          Deletar
        </button>
        <button onClick={() => onUpdate(_id)}>Editar</button>
      </td>
      <td className="id"></td>
    </tr>
  );
};

const EditRow = ({ record, onCancelUpdate }) => {
  const handleUpdate = useUpdate();
  const [editRecord, setEditRecord] = useState(record);
  const { date, description, value, _id } = editRecord;

  const handleInput = (event) => {
    setEditRecord({
      ...editRecord,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = () => {
    handleUpdate(_id, editRecord);
    onCancelUpdate();
  };

  return (
    <tr>
      <td>
        <input onInput={handleInput} name="date" type="date" value={date} />
      </td>
      <td>
        <input onInput={handleInput} name="description" value={description} />
      </td>
      <td>
        <input onInput={handleInput} name="value" type="number" value={value} />
      </td>
      <td>
        <button onClick={handleSave}>Salvar</button>
        <button onClick={onCancelUpdate}>Cancelar</button>
      </td>
    </tr>
  );
};
