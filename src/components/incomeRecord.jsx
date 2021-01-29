import React from "react";
import { Link } from "react-router-dom";
import { deleteRecord, updateRecord } from "../services/recordService";
import "../styles/incomeRecord.css";

const IncomeRecord = ({ id, concept, amount, date, type }) => {
  const handleDelete = (id) => {
    deleteRecord(id);

    alert("Record deleted successfully");
  };

  const handleUpdate = () => {
    updateRecord();
  };

  return (
    <div className="incomeRecord">
      <div className="incomeRecord__data">
        <p className="incomeRecord__field">Record: {id}</p>
        <p className="incomeRecord__field"> Concept: {concept}</p>
        <p className="incomeRecord__field"> Amount: ${amount}</p>
        <p className="incomeRecord__field"> Date: {date}</p>
        <p className="incomeRecord__field"> Type: {type}</p>
      </div>
      <div className="incomeRecord__options">
        <button
          className="incomeRecord__deleteButton"
          onClick={() => handleDelete(id)}>
          Delete
        </button>
        <Link to={`/updateRecord/${id}`}>
          <button className="incomeRecord__updateButton">Update</button>
        </Link>
      </div>
    </div>
  );
};

export default IncomeRecord;
