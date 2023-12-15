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

const Elemente = ({ name, category, date, amount }) => {
  const navigate = useNavigate();

  const handleChangeClick = () => {
    navigate("/create");
  };

  let categoryIcon = (
    <HelpOutlineIcon className="defaultIcon"></HelpOutlineIcon>
  );

  switch (category) {
    case "Technik":
      categoryIcon = <TvIcon className="technikIcon" />;
      break;
    case "Lebensmittel":
      categoryIcon = <ShoppingCartIcon className="shoppingIcon" />;
      break;
    case "Essen":
      categoryIcon = <FastfoodIcon className="foodIcon" />;
      break;
    case "Auto":
      categoryIcon = <DirectionsCarIcon className="carIcon" />;
      break;
    case "Gehalt":
      categoryIcon = <WorkIcon className="workIcon" />;
      break;
    case "Sonstiges":
      categoryIcon = <AutoAwesomeIcon className="otherIcon" />;
      break;

    // Füge weitere Cases hinzu, wenn du mehr Kategorien hinzufügst
    default:
      <HelpOutlineIcon className="defaultIcon"></HelpOutlineIcon>;
      break;
  }

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
      <div className="elementsAmount"> {amount}</div>
      <button className="changeButton" onClick={handleChangeClick}>
        <MoreVertIcon style={{ color: "white" }} />
      </button>
    </div>
  );
};

export default Elemente;
