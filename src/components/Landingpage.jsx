/**
 * @file Landingpage.jsx
 * @description React-Komponente für die Hauptseite der Anwendung.
 * Die `Landingpage`-Komponente repräsentiert die Hauptseite der Anwendung.
 * Sie enthält eine kurze Beschreibung der Anwendung, Buttons zum Navigieren
 * zum Dashboard und zur Registrierungsseite, sowie ein Tutorial.
 *
 * @component
 * @example
 * import Landingpage from './Landingpage';
 * // ... JSX innerhalb der Anwendung
 * <Landingpage />
 */

import React from "react";
import picture from "./Images/Placeholder.png";
import "./fonts/fonts.css";
import { useNavigate } from 'react-router-dom';

/**
 * Landingpage Funktionalkomponente
 *
 * @function
 * @returns {JSX.Element} - React JSX Element
 * @description Die `Landingpage`-Funktionalkomponente repräsentiert die Hauptseite
 * der Anwendung und enthält eine Überschrift, eine Beschreibung, Buttons zum Navigieren
 * und ein Tutorialbild.
 */
const Landingpage = () => {
  
    // React-Router Hook zum Navigieren zwischen Seiten
    const navigate = useNavigate();

     /**
     * Handler für den Klick auf den Registrieren-Button
     * Navigiert zur Login-Seite
     *
     * @function
     */
    const handleRegisterClick = () => {
        navigate('/login');
    };

    /**
     * @description
     * Funktion, die überprüft, ob der Benutzer eingeloggt ist, indem sie eine Anfrage an die Backend-API sendet.
     * Wenn der Benutzer eingeloggt ist, wird er zum Dashboard weitergeleitet, andernfalls wird eine Benachrichtigung angezeigt.
     * 
     * @function
     * @async
     */
    async function handleLoggedIn() {
        // Sendet eine Anfrage an die Backend-API, um den Authentifizierungsstatus zu überprüfen
        const response = await fetch('/api/checkLoggedIn')
        // Extrahiert JSON-Daten aus der Antwort
        const data = await response.json();
        
        // Protokolliert die erhaltenen Daten (ür Debugging-Zwecke)
        console.log(data)
        // Überprüft, ob die Antwort erfolgreich war und der Benutzer eingeloggt ist
        if(response.ok && data.isLoggedIn){
          // Leitet den Benutzer zum Dashboard weiter
          return navigate('/dashboard');
        }
        // Zeigt eine Benachrichtigung an, wenn der Benutzer nicht eingeloggt ist
        return alert("Logge dich erst ein!")
      }

    /**
     * Rendermethode für die Landingpage-Komponente
     *
     * @function
     * @returns {JSX.Element} - React JSX Element
     * @description Diese Methode rendert die Hauptseite der Anwendung mit einer Überschrift,
     * Beschreibungstext, Buttons und einem Tutorialbild.
     */
    return (
        <div>
            {/* Hauptcontainer für die Landingpage */}
            <div style={landingpage}>
                {/* Textcontainer mit Beschreibung und Buttons */}
                <div style={text}>
                    {/* Überschrift */}
                    <div style={header}>Dein digitaler Finanzassistent</div>

                    {/* Beschreibungstext */}
                    <div style={description}>
                        "Budget'Master" ist Ihre All-in-One-Plattform für ein müheloses
                        Finanzmanagement. Behalten Sie den Überblick über Ausgaben und Einnahmen,
                        setzen Sie individuelle Sparziele und verfolgen Sie mühelos Ihren finanziellen
                        Fortschritt. Mit einer benutzerfreundlichen Oberfläche macht "Budget'Master"
                        die Verwaltung Ihrer Finanzen so einfach wie nie zuvor.
                    </div>

                    {/* Buttoncontainer */}
                    <div style={buttons}>
                        {/* Dashboard-Button */}
                        <button style={login} onClick={handleLoggedIn}>Dashboard</button>

                        {/* Registrieren-Button */}
                        <button style={login} onClick={handleRegisterClick}>Registrieren</button>
                    </div>
                </div>

                {/* Tutorialcontainer */}
                <div style={tutorial}>
                    <img src={picture} alt="Tutorial" style={video}/>
                </div>
            </div>
        </div>
    );
};

// Styling-Objekte für verschiedene Teile der Komponente
const landingpage = {
    display: "flex",
    marginLeft: "auto",
    maxWidth: "1300px",
    marginTop: "16vh",
    marginRight: "auto",
};

const text = {
    width: "50%",
    marginRight: "2%",
};

const header = {
    fontFamily: "Avenir Next LT Pro Bold",
    fontSize: "64px",
    fontWeight: "bold",
    background: "linear-gradient(to right, #AF69B3, #7B69C7, #4668DB)",
    WebkitBackgroundClip: "text",
    color: "transparent",
};

const description = {
    width: "460px",
    fontFamily: "Avenir Next LT Pro",
    fontSize: "17px",
    fontWeight: "100",
    marginTop: "40px",
    color: "#E1E1E1",
};

const buttons = {
    display: "flex",
    marginTop: "100px",
};

const login = {
    fontFamily: "Avenir Next LT Pro",
    color: "#E1E1E1",
    width: "125px",
    height: "40px",
    textAlign: "center",
    border: "0px solid",
    backgroundImage: "linear-gradient(to right, #AF69B3, #7B69C7, #4668DB) 1",
    borderRadius: "5px",
    background: "linear-gradient(to right, #AF69B3, #7B69C7, #4668DB)",
    marginRight: "30px",
    cursor: "pointer",
};

const registration = {
    fontFamily: "Avenir Next LT Pro",
    color: "#E1E1E1",
    width: "125px",
    height: "40px",
    textAlign: "center",
    border: "2px solid",
    borderImage: "linear-gradient(to right, #AF69B3, #7B69C7, #4668DB) 1",
    borderRadius: "5px",
    background: "linear-gradient(to right, #AF69B3, #7B69C7, #4668DB)",
    WebkitBackgroundClip: "square",
    marginRight: "30px",
    cursor: "pointer", 
}

const registration2 = {
    fontFamily: "Avenir Next LT Pro",
    color: "#E1E1E1",
    width: "125px",
    height: "40px",
    textAlign: "center",
    border: "2px solid",
    borderImage: "linear-gradient(to right, #AF69B3, #7B69C7, #4668DB) 1",
    borderRadius: "5px",
    background: "transparent",
    cursor: "pointer",
}

const tutorial = {
    backgroundColor: "",
    width: "50%",
    marginLeft: "2%",
};

const video = {
    width: "800px",
    height: "auto",
};

export default Landingpage;