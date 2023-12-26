/**
 * @file AddFinance.js
 * @description React-Komponente für die Schaltfläche zum Hinzufügen einer Finanztransaktion.
 * Die `AddFinance`-Komponente stellt eine einfache Schaltfläche bereit, die es dem Benutzer ermöglicht,
 * eine neue Finanztransaktion hinzuzufügen. Beim Klicken auf die Schaltfläche wird der Benutzer zur
 * "create"-Seite navigiert, wo er die Details für die neue Transaktion eingeben kann.
 *
 * @component
 * @example
 * import AddFinance from './AddFinance';
 * // ... JSX innerhalb der Anwendung
 * <AddFinance />
 */

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
