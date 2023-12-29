/**
 * @module ForgotPassword
 */
import React from 'react'
import './ForgotPassword.css'
import email from '../Images/email.png'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'

/**
 * Passwort Vergessen Komponente.
 * @function
 * @name Login
 * @returns {JSX.Element} Gerenderte Passwort Vergessen Komponente
 * @description Enthält ein Eingabefeld, welches dem Benutzer ermöglich seine Email einzugeben und das Passwort zurückzusetzen.
 */

function ForgotPassword() {

      /**
     * Navigationshelfer von react-router-dom.
     * @name navigate
     * @type {function}
     * @inner
     */
  const navigate = useNavigate();

      /**
     * Behandelt das Klicken auf "Startseite", indem es zur entsprechenden Seite navigiert.
     * @function
     * @name handleMainPage
     * @inner
     */
  const handleMainPage = () => {
    navigate('/');
  }

      /**
     * @description Erzeugung der Passwort Vergessen-Komponente.
     * Folmular welches das Eingabe-Input beinhaltet um eine Email-Adresse einzugeben und die Buttons zur Start- und Loginseite.
     */
  return (
    <div>
      <Header />
    <div className="headPass">
        <div className='containerPass'>
            <div className="headlinePass">
                Passwort vergessen?
            </div>
            <div className="underlinePass">
            </div>

            <div className='textfieldPass'> 
              Gebe deine E-Mail an, um dein Passwort zurückzusetzen.
            </div>

            <div className="inputPass">
                <img src={email} height="20px" width="20px" alt="" />
                <input type="text" placeholder="E-Mail" />
            </div>
            <div className="submit-containerPass">
            <div className="submitPass">
                Konto wiederherstellen
            </div>
            <div className="submitPass" onClick={handleMainPage}>
                Zur Startseite
            </div>
        </div>
        </div>
    </div>  
    </div>  
  )
}

export default ForgotPassword