// react importations
import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";


// services importations
import { checkSession } from "@services/AuthService";

// context importations
import { useOverlay } from "@contexts/OverlayContext";
import { useAuth } from "@contexts/AuthContext";

import './App.css'

function App() {

  // context variables
  const { isLoginChoice, isLoginEmail, isLoginPass, isLoginCreate, isLoginSent, isMask, isLoading } = useOverlay();
  const { username, email, setIsConnexion, setUsername, setEmail } = useAuth();



  /**
   * useEffect to handle the avatar and header navigation
   */
  useEffect(() => {
    const sessionToken = localStorage.getItem('token');

    if (sessionToken) {
      // Call the service to verify the token
      const verifyToken = async () => {
        try {
          await checkSession(sessionToken);
          setIsConnexion(true);

        } catch (error) {
          console.error("Erreur lors de la vérification du token", error);
          localStorage.removeItem('token');
        }
      };
      verifyToken();
    }
  }, [setIsConnexion, setUsername, setEmail]);
  return (
    <>
      {isMask ? <div className="mask"></div> : null}
      {/* <Header /> */}
      {/* {isLoading ? <Loading /> : null} */}

{/* 
      {isLoginChoice ? <LoginChoice /> : null}
      {isLoginEmail ? <LoginEmail /> : null}
      {isLoginPass ? <LoginPass email={email} /> : null}
      {isLoginCreate ? <LoginCreate email={email} /> : null}
      {isLoginSent ? <LoginSent email={email} username={username} /> : null}
      {isCookies ? <CookiesChoice /> : null} */}
    </>
  );
}

export default App
