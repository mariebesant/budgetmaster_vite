import React from "react";
import "./AddFinance.css";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Create from "./Pages/Create";

const AddFinance = () => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/create");
  };

  return (
    <div className="addContainer">
      <button className="createButton" onClick={handleCreateClick}>
        <AddIcon style={{ color: "white", fontSize: "40" }} />
      </button>
    </div>
  );
};

export default AddFinance;
