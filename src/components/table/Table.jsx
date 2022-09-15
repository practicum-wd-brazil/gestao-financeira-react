import TableRow from "./TableRow/TableRow";

const Table = ({ records }) => {
  const total = records.reduce((acc, cur) => (acc += parseFloat(cur.value)), 0);

  return (
    <section>
      <h1>Lançamentos</h1>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Valor (R$)</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {records.map((record) => {
            return <TableRow row={record} key={record._id} />;
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total</td>
            <td id="total">{total}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default Table;
