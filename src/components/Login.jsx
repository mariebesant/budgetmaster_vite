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
import "./fonts/fonts.css";
import { Password } from '@mui/icons-material'

/**
 * Login Komponente für die Anwendung.
 * @function
 * @name Login
 * @returns {JSX.Element} Gerenderte Login Komponente
 * @description Die Login-Funktionalkomponente repräsentiert das Login und die Registrierung eines Benutzers.
 * Sie bietet ein Formular, welches einem Benutzer ermöglicht, ein neues Konto zu erstellen.
 * Anschließend kann das erstellte Konto benutzt werden, um sich anzumelden.
 */
const Login = () => {

    /**
     * Zustand für die aktuelle Aktion (Registrieren oder Anmelden).
     * Formular wechselt die Eingabewerte, jenachdem auf welchen Button der Benutzer klickt.
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

    /**
     * @name action
     * @type {string}
     * @description Zustände für die Eingabefelder, welche die eingegebenden Daten an das Backend übergeben.
     */
    const [firstname, firstnameUpdate] = useState('');
    const [lastname, lastnameupdate] = useState('');
    const [email, emailupdate] = useState('');
    const [birthdate, birthdateupdate] = useState('');
    const [username, usernameupdate] = useState('');
    const [passwort, passwortupdate] = useState('');

    /**
     * Registriert einen neuen Benutzer mit den eingegebenen Daten aus den Eingabefeldern.
     * @async
     * @function
     * @name register
     * @throws {Error} - Fehler bei der HTTP-Anfrage
     */
    async function register() {

        /**
         * @description Erhält die Daten aus den Eingabefeldern und sichert sie in der Konstante.
         */
        const data = {
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: passwort,
            username: username,
            birthdate: birthdate
        }

        /**
         * @description HTTP POST Anfrage mittels eines "Fetch-API-Requests" wird an den Backend-Endpunkt gesendet.
         * Daten aus den Eingabefeldern wird über ein JSON-Format übermittelt.
         * Erhält eine Antwort vom Backend, ob die Registrierung erfolgreich war oder nicht.
         * Dies wird kurz über einen alert dem Benutzer signalisiert, ansonsten wird ein Error ausgegeben.
         */

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
     * Meldet einen Benutzer mit den eingegebenen Daten aus den Einfabegeldern an.
     * @async
     * @function
     * @name login
     * @throws {Error} - Fehler bei der HTTP-Anfrage
     */
    async function login() {

        /**
         * @description Erhält die Daten aus den Eingabefeldern und sichert sie in der Konstante.
         */
        const data = {
          password: passwort,
          username: username
        };
      
        /**
         * @description HTTP POST Anfrage mittels eines "Fetch-API-Requests" wird an den Backend-Endpunkt gesendet.
         * Daten aus den Eingabefeldern wird über ein JSON-Format übermittelt.
         * Erhält eine Antwort vom Backend, ob die Anmeldung erfolgreich war und wird dann weiter zum Dashboard geleitet.
         */
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

    /**
     * @description Erzeugung der Login-Komponente.
     * Folmular welches die Eingabe-Inputs beinhaltet und die Buttons zum Registrieren, Anmelden und dem varieren zwischen den beiden Formularen.
     * Eingabewerte werden in den Konstanten gesichert.
     */
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