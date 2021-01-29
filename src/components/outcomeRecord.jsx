import React from "react";
import { Link } from "react-router-dom";
import { deleteRecord } from "../services/recordService";
import "../styles/outcomeRecord.css";

const OutcomeRecord = ({ id, concept, amount, date, type }) => {
  const handleDelete = (id) => {
    deleteRecord(id);

    alert("Record deleted successfully");
  };

  return (
    <div className="outcomeRecord">
      <div className="outcomeRecord__data">
        <p className="outcomeRecord__field"> Record: {id}</p>
        <p className="outcomeRecord__field"> Concept: {concept}</p>
        <p className="outcomeRecord__field"> Amount: ${amount}</p>
        <p className="outcomeRecord__field"> Date: {date}</p>
        <p className="outcomeRecord__field"> Type: {type}</p>
      </div>
      <div className="outcomeRecord__options">
        <button
          className="outcomeRecord__deleteButton"
          onClick={() => handleDelete(id)}>
          Delete
        </button>
        <Link to={`/updateRecord/${id}${type}`}>
          <button className="outcomeRecord__updateButton">Update</button>
        </Link>
      </div>
    </div>
  );
};

export default OutcomeRecord;
