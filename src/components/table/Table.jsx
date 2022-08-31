import TableRow from "./TableRow/TableRow";
import api from "../../services/Api";
import { useEffect, useState } from "react";

const Table = () => {
  const [records, setRecords] = useState([
    {
      _id: "123",
      description: "something",
      value: 12,
      date: "2022-08-24",
    },
  ]);

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
            <td id="total">0</td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default Table;
