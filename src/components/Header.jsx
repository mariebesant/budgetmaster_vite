/**
 * @module Header
 */

import React from "react";
import logo from "./Images/WordLogo.png";
import menuIcon from "./Images/ProfileIcon.png";
import Menu from "./Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Header Komponente für die Anwendung.
 * @function
 * @name Header
 * @returns {JSX.Element} Gerenderte Header Komponente
 */
const Header = () => {
  /**
   * Zustand für die Sichtbarkeit des Menüs.
   * @name menuVisible
   * @type {boolean}
   * @default false
   * @inner
   */
  const [menuVisible, setMenuVisible] = useState(false);

  /**
   * Navigationshelfer von react-router-dom.
   * @name navigate
   * @type {function}
   * @inner
   */
  const navigate = useNavigate();

  /**
   * Behandelt das Klicken auf das Logo, indem es zur Startseite navigiert.
   * @function
   * @name handleLogoClick
   * @inner
   */
  const handleLogoClick = () => {
    navigate('/');
  }

  return (
    <div >
      <header style={headerStyle}>
        <div style={logoContainerStyle}>
          <img src={logo} alt="Logo" style={logoStyle} onClick={handleLogoClick} />
          <img
            src={menuIcon}
            alt="Menu Icon"
            style={iconStyle}
            onClick={() => setMenuVisible(!menuVisible)}
          />
        </div>
      </header>
      <div style={{...menuStyle, visibility: menuVisible ? 'visible' : 'hidden'}}>
        <Menu ></Menu>
      </div>
    </div>
    
  );
};

/**
 * Stil für das Menü.
 * @name menuStyle
 * @type {Object}
 * @property {string} visibility - Sichtbarkeit des Menüs.
 */
const menuStyle = {
  visibility: 'hidden'
}

/**
 * Stil für den Header.
 * @name headerStyle
 * @type {Object}
 */
const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center", 
  padding: "20px",
  backgroundColor: "#121212",
  color: "#fff",
};

/**
 * Stil für den Logo-Container.
 * @name logoContainerStyle
 * @type {Object}
 */
const logoContainerStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "center", 
  paddingLeft: "10px",
};

/**
 * Stil für das Logo.
 * @name logoStyle
 * @type {Object}
 */
const logoStyle = {
  width: "auto",
  height: "40px",
};

/**
 * Stil für das Menü-Icon.
 * @name iconStyle
 * @type {Object}
 */
const iconStyle = {
  width: "auto",
  height: "30px",
  position: "absolute",
  right: "25px",
  cursor: "pointer"
};

export default Header;