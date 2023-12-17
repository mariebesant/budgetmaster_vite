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


const Login = () => {

    const [action, setAction] = useState("Registrieren");
    const [username, usernameupdate] = useState('');
    const [passwort, passwortupdate] = useState('');

    const navigate=useNavigate();

    const handleForgotPassword = () => {
        navigate('/forgotpassword');
    }

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

    // function handleMyLogin(event){
    //     event.preventDefault();
    //     let userData = {
    //         username:username,
    //         passwort:passwort
    //     }
    
    //     // fetch("/getExampleData", {
    //     //     method:"GET",
    //     //     headers:{
    //     //         "Content-Type":"application/json"
    //     //     },
    //     //     body: JSON.stringify(userData)
    //     // }).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error))

    //     fetch("api/login", {
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body: JSON.stringify(userData)
    //     })
    //     console.log("Clicked");
    // }

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     const login = {username, passwort};

    //     fetch('/api/login', {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(login)
    //     }).then((resp) => {
    //         // console.log('Erfolgreich eingeloggt.')
    //         if(Object.keys(resp).length===0){
    //             console.log("Gebe einen richtigen Username ein");
    //         } else {
    //             if(resp.passwort===passwort){
    //                 console.log("Erfolgreich");
    //                 navigate('/');
    //             } else{
    //                 console.log("Bitte gebe ein richtiges Passwort ein");
    //             }
    //         }
    //     }).catch((err)=>{
    //         console.log('Login fehlgeschlagen.')
    //     })
    // }

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
                    <input type="Birthday" placeholder="Geburtsdatum" />
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

            {action==="Anmelden"?<div></div>:<div className="login-container" >
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
