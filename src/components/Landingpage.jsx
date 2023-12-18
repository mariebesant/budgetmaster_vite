import React from "react";
import picture from "./Images/tierschutz-hunde.png";
import "./fonts/fonts.css";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';


const Landingpage = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/login');
    };


    async function handleLoggedIn() {
        const response = await fetch('/api/checkLoggedIn')
        const data = await response.json();
        
        console.log(data)
        if(response.ok && data.isLoggedIn){
          return navigate('/dashboard');
        }
        return alert("Logge dich erst ein!")
      }

    return (
    <div>
        <div style={landingpage}>
            
            <div style={text}>
                <div style={header}>Dein digitaler Finanzassistent</div>

                <div style={description}>
                "Budget'Master" ist Ihre All-in-One-Plattform für ein müheloses Finanzmanagement. 
                Behalten Sie den Überblick über Ausgaben und Einnahmen, setzen Sie individuelle Sparziele 
                und verfolgen Sie mühelos Ihren finanziellen Fortschritt. Mit einer benutzerfreundlichen Oberfläche 
                macht "Budget'Master" die Verwaltung Ihrer Finanzen so einfach wie nie zuvor.
                </div>

                <div style={buttons}>
                    <button style={login} onClick={handleLoggedIn}>Dashboard</button>
                    <button style={login} onClick={handleRegisterClick}>Registrieren</button>
                </div>
            
            </div>
            <div style={tutorial}>
                
                <img src={picture} alt="Tutorial" style={video}/>

            </div>

        </div>
    </div>
    
  );
};

//Container für alle Elemente (Text, Video, Buttons)
const landingpage = {   
    //backgroundColor: "red",
    display: "flex",
    marginLeft: "auto",
    maxWidth: "1300px",
    marginTop: "16vh",
    marginRight: "auto",    
}

//Container für die Text Elemente + Buttons
const text = {
    width: "50%",
    marginRight: "2%",
    //backgroundColor: "green",
}

//CSS für den Titel "Dein digitaler Finanzassistent"
const header = {
    fontFamily: "Avenir Next LT Pro Bold",
    fontSize: "64px",
    fontWeight: "bold",
    background: "linear-gradient(to right, #AF69B3, #7B69C7, #4668DB)",
    WebkitBackgroundClip: "text",
    color: "transparent",
}

//CSS für die Beschreibung unter der Überschrift
const description = {
    width: "460px",
    fontFamily: "Avenir Next LT Pro",
    fontSize: "17px",
    fontWeight: "100",
    marginTop: "40px",
    color: "#E1E1E1",
}

//Container für beide Buttons (Login und Registrieren)
const buttons = {
    display: "flex",
    marginTop: "100px",
}

//CSS für den Button "Login"
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
}

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

//CSS für den Button "Registrieren"
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

//Container für das Tutorial
const tutorial = {
    backgroundColor: "green",
    width: "50%",
    marginLeft: "2%"
}

//CSS für das Tutorial-Video
const video = {
    width: "100%",
    height: "100%",
};

export default Landingpage;