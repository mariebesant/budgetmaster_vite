/**
 * @file Menu.js
 * @description React-Komponente für das Hauptmenü der Anwendung.
 * Die `Menu`-Komponente repräsentiert ein benutzerdefiniertes Navigationsmenü mit verschiedenen Optionen,
 * wie "Meine Finanzen", "Einstellungen" und "Lightmode". Die Komponente enthält auch eine Abmelden-Option,
 * die über eine API-Anfrage funktioniert.
 *
 * @component
 * @example
 * import Menu from './Menu';
 * // ... JSX innerhalb der Anwendung
 * <Menu />
 */

import React from "react";
import "./fonts/fonts.css"
import { useNavigate } from 'react-router-dom';

/**
 * Menu Funktionalkomponente
 *
 * @function
 * @returns {JSX.Element} - React JSX Element
 * @description Die `Menu`-Funktionalkomponente repräsentiert das Hauptmenü der Anwendung.
 * Sie bietet verschiedene Optionen für die Benutzerinteraktion und enthält Funktionen zum Testen von
 * Anmelde- und Abmeldeaktionen. Das Design ist ansprechend und flexibel positioniert.
 */
const Menu = () => {
  // React-Router Hook zum Navigieren zwischen Seiten
  const navigate = useNavigate();

  /**
   * Testet die Anmeldung mit festen Benutzerdaten über eine API-Anfrage.
   *
   * @async
   * @function
   * @throws {Error} - Fehler bei der HTTP-Anfrage
   */
  async function testLogin() {
    const data = {
      password: "hallo",
      username: "besantma"
    };
  
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Testet die Abmeldung durch einen API-Aufruf.
   *
   * @async
   * @function
   */
  async function testLogout() {
    const response = await fetch('/api/logout');
    console.log(await response.json());
  }

  /**
   * Rendermethode für die Menu-Komponente.
   *
   * @function
   * @returns {JSX.Element} - React JSX Element
   * @description Diese Methode rendert das Hauptmenü mit verschiedenen Optionen und Funktionen.
   * Die Darstellung erfolgt in einem ansprechenden Design mit spezifischen Styling-Attributen.
   */
  return (
    <div>
      {/* Hauptcontainer für das Menü */}
      <div style={MenuContainer}>
          
          {/* Menüoptionen */}
          <div style={Buttons}>Meine Finanzen</div>
          <div style={Buttons}>Einstellungen</div>
          <div style={Buttons}>Lightmode</div>
          <hr style={Line} />
          {/* Abmelden-Option */}
          <div style={Buttons} onClick={testLogout}>Abmelden</div>

      </div>
    </div>
  );
};

// Styling-Objekte für verschiedene Teile der Komponente
const MenuContainer = {
    background: "#1D1D1D",
    height: "120px",
    width: "",
    borderRadius: "6px",
    boxShadow: "0px 0px 10px -1px rgba(0, 0, 0, 0.2)",
    textAlign: "right",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingRight: "12px",
    paddingLeft: "12px",
    position: "absolute",
    right: "15px",
    marginTop: "-15px"
};

const Buttons = {
    background: "transparent",
    color: "#E1E1E1",
    border: "0px solid",
    fontFamily: "Avenir Next LT Pro",
    cursor: "pointer",
    fontSize: "14px",
    margin: "0px",
    padding: "0px",
};

const Line = {
  margin: "0px",
  color: "rgba(225, 225, 225, 0.2)"

};

export default Menu;