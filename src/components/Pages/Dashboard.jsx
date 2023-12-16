import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header";
import Sparziel from "../Sparziel";
import Transaktionen from "../Transaktionen";

const Dashboard = () => {
  const [savingsGoal, setSavingsGoal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/getSavingsGoal', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        if (response.ok) {
          const jsonResponse = await response.json();
          setSavingsGoal(convertEuro(jsonResponse.savings_goal));
          setLoading(false);
        } 
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  function convertEuro(num) {
    return (num / 100).toFixed(2);
  }

  return (
    <div>
      <Header />
      <div style={gridContainer}>
        <div className="Sidebar" style={sidebarStyle}>
          sideBar
        </div>
        <div className="FinanceList" style={financeListStyle}>
          <Transaktionen />
        </div>
        <div className="Puffer" style={pufferStyle}>
          seitending
        </div>
        <div className="AddFinance" style={addFinanceStyle}>
          Add
        </div>

        <div className="Sparziel" style={sparzielStyle}>
          <Sparziel />
          <div style={anzeigeSparziel}>
            Sparziel:  {savingsGoal}€
          </div> 
        </div>
      </div>
    </div>
  );
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "300px auto 300px",
  gridTemplateRows: "300px 20px auto",
  gridGap: "10px",
};

const sidebarStyle = {
  backgroundColor: "blue",
  gridColumn: "1 / 2",
  gridRow: "1 / 4",
  height: "calc(100vh - 80px)",
};

const addFinanceStyle = {
  backgroundColor: "purple",
  gridColumn: "2 /3",
  gridRow: "2 / 3",
};

const sparzielStyle = {
  gridColumn: "2 / 3",
  gridRow: "1 / 2",
  width: "300px",
  display:"flex",
  justifySelf: "center",
  flexDirection: "column"
};
const anzeigeSparziel = {
  fontFamily: "Avenir Next LT Pro",
  fontSize: "17px",
  fontWeight: "100",
  color: "#E1E1E1",
  textAlign: "center"
};

const financeListStyle = {};

const pufferStyle = {
  backgroundColor: "yellow",
  gridColumn: "3 / 4",
  gridRow: "1 / 4",
  height: "calc(100vh - 80px)",
};

export default Dashboard;
