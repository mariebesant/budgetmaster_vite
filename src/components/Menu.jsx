import React from "react";
import "./fonts/fonts.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios"; 

const Menu = () => {
  const navigate = useNavigate();

  const testFetch = async () => {
    const response = await fetch("/api/getExampleData");
    const data = await response.json();
    
    console.log(data);
  }

  const handleLogoutClick = async () => {
    const response = await fetch('api/logout');

    console.log(response)

    if (response.ok) {
      console.log('Logout successful');
      navigate('/login');
    } else {
      // Handle error
      console.error('Logout request failed');
    }
  };

  return (
    
    <div style={ MenuContainer }>
        
        <div style={ Buttons } onClick={testFetch}>Meine Finanzen</div>
        <div style={ Buttons } onClick={() => navigate('/')}>Einstellungen</div>
        <div style={ Buttons }>Lightmode</div>
        <hr style={Line}/>
        <div style={ Buttons }>Abmelden</div>

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
