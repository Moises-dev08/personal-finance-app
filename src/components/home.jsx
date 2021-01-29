import React, { useState, useEffect } from "react";
import Balance from "./balance";
import Last10Results from "./last10results";
import { getLast10Records } from "../services/recordService";
import "../styles/home.css";

const Home = () => {
  const [last10results, setLast10Results] = useState([]);

  useEffect(() => {
    async function fecthLast10() {
      const last10records = await getLast10Records();
      setLast10Results(last10records.data);
      console.log(last10records.data);
      return last10records;
    }
    fecthLast10();
  }, []);

  return (
    <div className="home">
      <div className="home__balance">
        <Balance />
      </div>
      <div className="home__last10results">
        <Last10Results last10results={last10results} />
      </div>
    </div>
  );
};

export default Home;
