import { useState, useEffect } from "react";
import api from "../services/Api";

export const useRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    console.log("USE EFFECT");
    api.getAll().then((apiRecords) => {
      setRecords(apiRecords);
    });
  }, []);

  const saveRecord = (record) => {
    api.save(record).then((savedRecord) => {
      setRecords((prev) => [...prev, savedRecord]);
    });
  };

  const deleteRecord = (id) => {
    api.remove(id).then(() => {
      setRecords(records.filter((record) => record._id !== id));
    });
  };

  const updateRecord = (id, newRecord) => {
    setRecords((prev) => {
      const index = prev.findIndex((record) => record._id === id);
      const newState = prev.slice();
      newState.splice(index, 1, newRecord);
      return newState;
    });
  };

  return {
    records,
    saveRecord,
    deleteRecord,
    updateRecord,
  };
};
