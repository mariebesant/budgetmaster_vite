import React from 'react'
import './ForgotPassword.css'
import email from '../Images/email.png'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'

function ForgotPassword() {

  const navigate = useNavigate();

  const handleMainPage = () => {
    navigate('/');
  }

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