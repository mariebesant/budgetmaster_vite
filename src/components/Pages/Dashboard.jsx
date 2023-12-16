import React from "react";
import Header from "../Header";
import Sparziel from "../Sparziel";
import Transaktionen from "../Transaktionen";
import AddFinance from "../AddFinance";
import Sidebar from "../Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div style={gridContainer}>
        <div className="Sidebar" style={sidebarStyle}>
          <Sidebar />
        </div>
        <div className="FinanceList" style={financeListStyle}>
          <Transaktionen />
        </div>
        <div className="Puffer" style={pufferStyle}>
          seitending
        </div>
        <div className="AddFinance" style={addFinanceStyle}>
          <AddFinance />
        </div>

        <div className="Sparziel" style={sparzielStyle}>
          <Sparziel />
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
  //backgroundColor: "blue",
  gridColumn: "1 / 2",
  gridRow: "1 / 4",
  height: "calc(100vh - 80px)",
};

const addFinanceStyle = {
  //backgroundColor: "purple",
  gridColumn: "2 /3",
  gridRow: "2 / 3",
};

const sparzielStyle = {
  gridColumn: "2 / 3",
  gridRow: "1 / 2",
  width: "300px",
  justifySelf: "center",
};

const financeListStyle = {};

const pufferStyle = {
  //backgroundColor: "yellow",
  gridColumn: "3 / 4",
  gridRow: "1 / 4",
  height: "calc(100vh - 80px)",
};

export default Dashboard;
