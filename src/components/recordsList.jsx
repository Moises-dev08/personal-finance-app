import React, { useState, useEffect } from "react";
import { getIncometype, getOutcometype } from "../services/recordService";
import IncomeRecord from "./incomeRecord";
import OutcomeRecord from "./outcomeRecord";
import "../styles/recordsList.css";

const RecordsList = () => {
  const [incomeRecords, setIncomeRecords] = useState();
  const [outcomeRecords, setOutcomeRecords] = useState([]);

  useEffect(() => {
    async function fetchIncomeType() {
      const responseIncomeType = await getIncometype();
      setIncomeRecords(responseIncomeType.data);
      return responseIncomeType;
    }
    async function fetchOutcomeType() {
      const responseOutcomeType = await getOutcometype();
      setOutcomeRecords(responseOutcomeType.data);
      return responseOutcomeType;
    }

    fetchOutcomeType();
    fetchIncomeType();
  }, []);

  return (
    <div className="recordsList">
      <div className="recordsList__income">
        <h3>Income Records</h3>
        {incomeRecords?.map((record) => (
          <IncomeRecord
            key={record.id}
            id={record.id}
            concept={record.concept}
            amount={record.amount}
            date={record.date}
            type={record.type}
          />
        ))}
      </div>
      <div className="recordsList__outcome">
        <h3>Outcome Records</h3>
        {outcomeRecords?.map((record) => (
          <OutcomeRecord
            key={record.id}
            id={record.id}
            concept={record.concept}
            amount={record.amount}
            date={record.date}
            type={record.type}
          />
        ))}
      </div>
    </div>
  );
};

export default RecordsList;
