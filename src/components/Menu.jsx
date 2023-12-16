import React from "react";
import "./fonts/fonts.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios"; 

const Menu = () => {
  const navigate = useNavigate();

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

  async function testLogout() {
    const response = await fetch('/api/logout');
    console.log(await response.json());
  }

  return (
    
    <div style={ MenuContainer }>
        
        <div style={ Buttons } onClick={testLogin}>Meine Finanzen</div>
        <div style={ Buttons } onClick={() => navigate('/')}>Einstellungen</div>
        <div style={ Buttons } >Lightmode</div>
        <hr style={Line}/>
        <div style={ Buttons } onClick={testLogout}>Abmelden</div>

    </div>

  );
};

const MenuContainer = {

  //Design  
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

    //Position
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
