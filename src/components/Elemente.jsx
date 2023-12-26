import React from "react";
import TvIcon from "@mui/icons-material/Tv";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkIcon from "@mui/icons-material/Work";
import { useNavigate } from "react-router-dom";
import Create from "./Pages/Create";

/**
 * Die Elemente-Komponente rendert eine Transaktionskachel mit Details wie Name, Kategorie, Datum, Betrag und einer Schaltfläche zum Ändern.
 *
 * @component
 * @param {Object} props - Die Eigenschaften der Transaktion.
 * @param {string} props.name - Der Name der Transaktion.
 * @param {string} props.category - Die Kategorie der Transaktion.
 * @param {string} props.date - Das Datum der Transaktion.
 * @param {string} props.amount - Der Betrag der Transaktion.
 * @returns {JSX.Element} - React-Komponente für eine Transaktionskachel.
 */
const Elemente = ({ name, category, date, amount }) => {
  const navigate = useNavigate();

  /**
   * Navigiert zur "create"-Seite, wenn auf die Ändern-Schaltfläche geklickt wird.
   *
   * @function
   * @inner
   */
  const handleChangeClick = () => {
    navigate("/create");
  };

  // Standard-Icon für den Fall, dass keine passende Kategorie gefunden wird.
  let categoryIcon = (
    <HelpOutlineIcon
      className="defaultIcon"
      style={{ fontSize: 40 }}
    ></HelpOutlineIcon>
  );

  // Setzt das Kategorie-Icon basierend auf der Kategorie der Transaktion.
  switch (category) {
    case "Technik":
      categoryIcon = (
        <TvIcon className="technikIcon" style={{ fontSize: 40 }} />
      );
      break;
    case "Lebensmittel":
      categoryIcon = (
        <ShoppingCartIcon className="shoppingIcon" style={{ fontSize: 40 }} />
      );
      break;
    case "Essen":
      categoryIcon = (
        <FastfoodIcon className="foodIcon" style={{ fontSize: 40 }} />
      );
      break;
    case "Auto":
      categoryIcon = (
        <DirectionsCarIcon className="carIcon" style={{ fontSize: 40 }} />
      );
      break;
    case "Gehalt":
      categoryIcon = <WorkIcon className="workIcon" style={{ fontSize: 40 }} />;
      break;
    case "Sonstiges":
      categoryIcon = (
        <AutoAwesomeIcon className="otherIcon" style={{ fontSize: 40 }} />
      );
      break;

    default:
      <HelpOutlineIcon
        className="defaultIcon"
        style={{ fontSize: 40 }}
      ></HelpOutlineIcon>;
      break;
  }

  /**
   * Rendert eine Transaktionskachel mit Details und Ändern-Schaltfläche.
   *
   * @returns {JSX.Element} - React-Komponente für eine Transaktionskachel.
   */
  return (
    <div className="elements">
      {categoryIcon}
      <div className="elementsDetails">
        <div className="elementsDetailsName"> {name}</div>
        <div className="elementsDetailsBox">
          <div className="elementsDetailsBoxCategory">{category}</div>
          <div className="elementsDetailsBoxName">{date}</div>
        </div>
      </div>
      <div className="elementsAmount">{amount}</div>
      <button className="changeButton" onClick={handleChangeClick}>
        <MoreVertIcon style={{ color: "white" }} />
      </button>
    </div>
  );
};

export default Elemente;
