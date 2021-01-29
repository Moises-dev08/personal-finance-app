import React from "react";
import "../styles/last10results.css";

const Last10results = ({ last10results }) => {
  return (
    <div className="last10results">
      <h3>Last ten records:</h3>
      {last10results?.map((result) => (
        <div className="last10results__data">
          <p className="last10results__field"> Record: {result.id}</p>
          <p className="last10results__field"> Concept: {result.concept}</p>
          <p className="last10results__field"> Amount: ${result.amount}</p>
          <p className="last10results__field"> Date: {result.date}</p>
          <p className="last10results__field"> Type: {result.type}</p>
        </div>
      ))}
    </div>
  );
};

export default Last10results;
