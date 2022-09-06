import { useContext } from "react";
import { DeleteContext } from "../../../App";

export default function TableRow({ row }) {
  const handleDelete = useContext(DeleteContext);

  const { date, description, value, _id } = row;

  return (
    <tr>
      <td className="data">{date}</td>
      <td className="descricao">{description}</td>
      <td className="valor">{value}</td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn-delete">
          Deletar
        </button>
      </td>
      <td className="id"></td>
    </tr>
  );
}
