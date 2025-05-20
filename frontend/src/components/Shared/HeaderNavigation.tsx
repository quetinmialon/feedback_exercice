
//////////////////////////////////////////
///////////    IMPORTATIONS     //////////
//////////////////////////////////////////

import { useState } from "react";
import { useOverlay } from "@contexts/OverlayContext";
import { useAuth } from "@contexts/AuthContext";

import Button from "@components/UI/Button";


//////////////////////////////////////////
///////////    COMPONENT     /////////////
//////////////////////////////////////////
const HeaderNavigation = () => {
  // console.log('\x1b[36m%s\x1b[0m', 'NavBar.tsx rendered');




  // state variables
  const { setIsLoginEmail, setIsRegisterForm, setIsMask} = useOverlay();
  const { isConnexion } = useAuth();
  const [isButton, setIsButton] = useState(true);
  const [connexionState, setConnexionState] = useState(isConnexion);



  /**
   * Handle the click event on the butto
   */
  const handleConnectButton = () => {
    setIsLoginEmail(true); // Update the context state
    setIsMask(true);
    // setIsLoading(true);
  };
  /**
   * Handle the click event on the button
   */
  const handleRegisterButton = () => {
    setIsRegisterForm(true); // Update the context state
    setIsMask(true);
    // setIsLoading(true);
  };



  /////////////////////////////////////
  ///////////    VIEW     /////////////
  /////////////////////////////////////
  return (
    <>

      <ul className="header-navigation">
        {!connexionState && isButton ?
          <li className="header-navigation__btn" onClick={handleConnectButton}>
            <Button text="Se Connecter" icon="react" />
          </li> : null}
        {!connexionState && isButton ?
          <li className="header-navigation__btn" onClick={handleRegisterButton}>
            <Button text="S'inscrire'" icon="react" />
          </li> : null}
      </ul>
    </>
  )
};


export default HeaderNavigation;