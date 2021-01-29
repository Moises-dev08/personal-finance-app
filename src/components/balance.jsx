import React, { useState, useEffect } from "react";
import { getBalance } from "../arithmeticOperations";
import { getOutcome, getIncome } from "../services/recordService";
import "../styles/balance.css";

const Balance = () => {
  const [outcome, setOutcome] = useState([]);
  const [income, setIncome] = useState([]);
  const [result, setResult] = useState("Click to see your balance");

  const handleBalance = () => {
    let balanceResult = getBalance(income, outcome);
    setResult(balanceResult);
    return balanceResult;
  };

  useEffect(() => {
    async function fetchOutcome() {
      const responseOutcome = await getOutcome();
      setOutcome(responseOutcome.data);
      return responseOutcome;
    }

    async function fetchIncome() {
      const responseIncome = await getIncome();
      setIncome(responseIncome.data);
      return responseIncome;
    }

    fetchOutcome();
    fetchIncome();
  }, []);

  return (
    <div className="balance">
      <h3> Balance result:</h3>
      <button className="balance__button" onClick={handleBalance}>
        {result}
      </button>
    </div>
  );
};

export default Balance;
