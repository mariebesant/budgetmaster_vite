import React from 'react'
import { useState } from 'react'
import './LoginStyle.css'
import user_icon from './Images/user.png'
import email_icon from './Images/email.png'
import password_icon from './Images/password.png'
import birthday_icon from './Images/birthday.png'

const Login = () => {

    const [action, setAction] = useState("Registrieren");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">
                {action}
            </div>
            <div className="underline">

            </div>
        </div>
        <div className="inputs">

            {action==="Anmelden"?<div></div>:<div className="input">
                <img src={user_icon} height="20px" width="20px" alt="" />
                <input type="FirstName" placeholder="Vorname" />
            </div>}
            {action==="Anmelden"?<div></div>:<div className="input">
                <img src={user_icon} height="20px" width="20px" alt="" />
                <input type="LastName" placeholder="Nachname" />
            </div>}
            {action==="Anmelden"?<div></div>:<div className="input">
                <img src={email_icon} height="20px" width="20px" alt="" />
                <input type="EMail" placeholder="E-Mail" />
            </div>}
            {action==="Anmelden"?<div></div>:<div className="input">
                <img src={birthday_icon} height="20px" width="20px" alt="" />
                <input type="Birthday" placeholder="Geburtstag" />
            </div>}

            <div className="input">
                <img src={user_icon} height="20px" width="20px" alt="" />
                <input type="text" placeholder="Nutzername" />
            </div>
            <div className="input">
                <img src={password_icon} height="20px" width="20px" alt="" />
                <input type="Passwort" placeholder="Passwort"/>
            </div>
        </div>
        {action==="Registrieren"?<div></div>:        <div className="forgot-password">
            Passwort vergessen? <span>Hier klicken!</span>
        </div>}

        <div className="submit-container">
            <div className={action==="Anmelden"?"submit gray":"submit"} onClick={()=>{setAction("Registrieren")}}>
                Registrieren
            </div>
            <div className={action==="Registrieren"?"submit gray":"submit"} onClick={()=>{setAction("Anmelden")}}>
                Anmelden
            </div>
        </div>
    </div>
  )
};

export default Login;
