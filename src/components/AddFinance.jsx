import React from "react";
import "./AddFinance.css";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Create from "./Pages/Create";

/**
 * Die AddFinance-Komponente rendert eine Schaltfläche zum Hinzufügen einer Finanztransaktion.
 *
 * @component
 * @returns {JSX.Element} - React-Komponente für die Schaltfläche zum Hinzufügen einer Finanztransaktion.
 */
const AddFinance = () => {
  const navigate = useNavigate();

  /**
   * Navigiert zur "create"-Seite, wenn auf die Schaltfläche zum Hinzufügen geklickt wird.
   *
   * @function
   * @inner
   */
  const handleCreateClick = () => {
    navigate("/create");
  };

  /**
   * Rendert die Schaltfläche zum Hinzufügen einer Finanztransaktion.
   *
   * @returns {JSX.Element} - React-Komponente für die Schaltfläche zum Hinzufügen.
   */
  return (
    <div className="addContainer">
      <button className="createButton" onClick={handleCreateClick}>
        <AddIcon style={{ color: "white", fontSize: "40" }} />
      </button>
    </div>
  );
};

export default AddFinance;
