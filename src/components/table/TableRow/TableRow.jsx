export default function TableRow({ row }) {
  const { date, description, value } = row;

  return (
    <tr>
      <td className="data">{date}</td>
      <td className="descricao">{description}</td>
      <td className="valor">{value}</td>
      <td>
        <button className="btn-delete">Deletar</button>
      </td>
      <td className="id"></td>
    </tr>
  );
}
