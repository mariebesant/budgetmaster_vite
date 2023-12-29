/**
 * @module Login
 */

import React from 'react'
import { useState } from 'react'
import './LoginStyle.css'
import user_icon from './Images/user.png'
import email_icon from './Images/email.png'
import password_icon from './Images/password.png'
import birthday_icon from './Images/birthday.png'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import { Password } from '@mui/icons-material'

/**
 * Login Komponente für die Anwendung.
 * @function
 * @name Login
 * @returns {JSX.Element} Gerenderte Login Komponente
 */
const Login = () => {

    /**
     * Zustand für die aktuelle Aktion (Registrieren oder Anmelden).
     * @name action
     * @type {string}
     * @default "Registrieren"
     * @inner
     */
    const [action, setAction] = useState("Registrieren");

    /**
     * Navigationshelfer von react-router-dom.
     * @name navigate
     * @type {function}
     * @inner
     */
    const navigate=useNavigate();

    /**
     * Behandelt das Klicken auf "Passwort vergessen", indem es zur entsprechenden Seite navigiert.
     * @function
     * @name handleForgotPassword
     * @inner
     */
    const handleForgotPassword = () => {
        navigate('/forgotpassword');
    }

    // Zustände für die Eingabefelder
    const [firstname, firstnameUpdate] = useState('');
    const [lastname, lastnameupdate] = useState('');
    const [email, emailupdate] = useState('');
    const [birthdate, birthdateupdate] = useState('');
    const [username, usernameupdate] = useState('');
    const [passwort, passwortupdate] = useState('');

    /**
     * Registriert einen neuen Benutzer mit den eingegebenen Daten.
     * @async
     * @function
     * @name register
     * @inner
     */
    async function register() {
        const data = {
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: passwort,
            username: username,
            birthdate: birthdate
        }

        try {
            const response = await fetch('/api/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if(!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            } else {
                alert('Du wurdest erfolgreich registriert.')
                navigate('/dashboard')
            }

            const jsonResponse = await response.json();
            console.log(jsonResponse);
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Meldet einen Benutzer mit den eingegebenen Daten an.
     * @async
     * @function
     * @name login
     * @inner
     */
    async function login() {
        const data = {
          password: passwort,
          username: username
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
            alert('Bitte gebe einen korrekten Benutzernamen und Passwort ein.');
            throw new Error(`HTTP error! status: ${response.status}`);
          } else {
            navigate('/dashboard')
          }
      
          const jsonResponse = await response.json();
          console.log(jsonResponse);
        } catch (error) {
          console.error(error);
        }
      }

    return (
    <div>
        <Header></Header>
    <div className='container'>

        <div className="header">
            <div className="text">
                {action}
            </div>
            <div className="underline">

            </div>
        </div>
        <form method='POST'>
            <div className="inputs">

                {action==="Anmelden"?<div></div>:<div className="input">
                    <img src={user_icon} height="20px" width="20px" alt="" />
                    <input value={firstname} onChange={ev => firstnameUpdate(ev.target.value)} type="FirstName" placeholder="Vorname" />
                </div>}
                {action==="Anmelden"?<div></div>:<div className="input">
                    <img src={user_icon} height="20px" width="20px" alt="" />
                    <input value={lastname} onChange={ev => lastnameupdate(ev.target.value)} type="LastName" placeholder="Nachname" />
                </div>}
                {action==="Anmelden"?<div></div>:<div className="input">
                    <img src={email_icon} height="20px" width="20px" alt="" />
                    <input value={email} onChange={ev => emailupdate(ev.target.value)} type="EMail" placeholder="E-Mail" />
                </div>}
                {action==="Anmelden"?<div></div>:<div className="input">
                    <img src={birthday_icon} height="20px" width="20px" alt="" />
                    <input value={birthdate} onChange={ev => birthdateupdate(ev.target.value)} type="Birthday" placeholder="Geburtsdatum" />
                </div>}

                <div className="input">
                    <img src={user_icon} height="20px" width="20px" alt="" />
                    <input type="text" value={username} onChange={ev => usernameupdate(ev.target.value)} placeholder="Nutzername" />
                </div>
                <div className="input">
                    <img src={password_icon} height="20px" width="20px" alt="" />
                    <input type="Passwort" value={passwort} onChange={ev => passwortupdate(ev.target.value)} placeholder="Passwort"/>
                </div>
            </div>
            {action==="Registrieren"?<div></div>:        <div className="forgot-password">
                Passwort vergessen? <span onClick={handleForgotPassword}>Hier klicken!</span>
            </div>}

            {action==="Registrieren"?<div></div>:<div type="submit" onClick={login} className="login-container" >
                    Login
                </div>}

            {action==="Anmelden"?<div></div>:<div type="submit" onClick={register} className="login-container" >
                    Registrieren
            </div>}

            <div className="submit-container">
                <div className={action==="Anmelden"?"submit gray":"submit"} onClick={()=>{setAction("Registrieren")}}>
                    Konto erstellen
                </div>
                <div className={action==="Registrieren"?"submit gray":"submit"} onClick={()=>{setAction("Anmelden")}}>
                    Anmelden
                </div>
            </div>
        </form>
    </div>
    </div>
  )
};

export default Login;