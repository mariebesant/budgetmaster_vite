import React from "react";
import logo from "./Images/WordLogo.png";
import menuIcon from "./Images/ProfileIcon.png";
import Menu from "./Menu";
import { useState } from "react";


const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div >
      <header style={headerStyle}>
        <div style={logoContainerStyle}>
          <img src={logo} alt="Logo" style={logoStyle} />
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

const menuStyle = {
  visibility: 'hidden'
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center", 
  padding: "20px",
  backgroundColor: "#121212",
  color: "#fff",
  //backgroundColor: "red",
};

const logoContainerStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "center", 
  paddingLeft: "10px",
};

const logoStyle = {
  width: "auto",
  height: "40px",
};


const iconStyle = {
  width: "auto",
  height: "30px",
  position: "absolute",
  right: "25px",
  cursor: "pointer"
};

export default Header;
