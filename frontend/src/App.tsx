
// context importations
import { useOverlay } from "@contexts/OverlayContext";

import './App.css'

import HeaderNavigation from "@/components/Shared/HeaderNavigation";
import LoginEmailAndPassword from "@/components/Overlays/LoginEmailAndPassword";
import RegisterForm from './components/Overlays/RegisterForm';



const App = () => {

  // context variables
  const { isLoginEmailAndPassword, isRegisterForm, isMask, isLoading } = useOverlay();


////////////////////////////////////
///////////    VIEW     ////////////
////////////////////////////////////
  return (
    <>
      {isMask ? <div className="mask"></div> : null}
      <HeaderNavigation />
      {isLoginEmailAndPassword ? <LoginEmailAndPassword /> : null}
      {isRegisterForm ? <RegisterForm /> : null}
    </>
  );
}



export default App
