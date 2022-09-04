export default function TableRow({ row, onDelete }) {
  const { date, description, value, _id } = row;

  return (
    <tr>
      <td className="data">{date}</td>
      <td className="descricao">{description}</td>
      <td className="valor">{value}</td>
      <td>
        <button onClick={() => onDelete(_id)} className="btn-delete">
          Deletar
        </button>
      </td>
      <td className="id"></td>
    </tr>
  );
}
