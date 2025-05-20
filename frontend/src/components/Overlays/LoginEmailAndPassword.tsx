import { useState } from "react";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { useOverlay } from "@contexts/OverlayContext";
import { useAuth } from "@contexts/AuthContext";
import { checkEmailAndPassword } from "@services/AuthService";


const LoginEmailAndPassword = () => {
  const { setIsLoginEmail, setIsRegisterForm, setIsLoading } = useOverlay();
  const { setEmail: setContextEmail } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);




  /**
   * Function to handle the back button click
   */
  const handleBackClick = () => {
    setIsLoginEmail(false);
  };



  /**
   * Function to handle the email change on every input
   * @param e 
   */
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };



   /**
   * Function to handle the password change on every input
   * @param e 
   */
   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };



  /**
   * Function to handle the mail click
   */
  const handleButtonClick = async () => {

    // Display a loading message
    setIsLoading(true);
    setError(null);

    try {
      // Wait for the response
      const response = await checkEmailAndPassword(email, password);
      setContextEmail(email);

      // Handle the response
      console.log("Response before change rerender", response);
      response.state ? setIsLoginEmail(false) : setIsRegisterForm(true);


    } catch (error) {
      setError("Erreur lors de la vérification de vos identifiants. Veuillez réessayer.");
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="overlay">
      <header className="overlay__header">
        <img className="btn__svg" src={`./public/assets/img/buttons/white/vite.svg`} onClick={handleBackClick} />
        <h2 className="overlay__ttl">
          Saisissez vos identifiants
        </h2>
      </header>

      <p className="overlay__description">
        Nous vérifions que vous avez déjà un compte.
      </p>
      <div className="overlay__form">
        <Input icon="react" type="text" label="Adresse e-mail" value={email}
          onChange={handleEmailChange} placeholder="votre-email@exemple.com" />
       

        <Input icon="react" type="password" label="Mot de passe" value={password}
          onChange={handlePasswordChange} placeholder="votre mot de passe" />
        {error && <p className="error-message">{error}</p>}

        <span onClick={handleButtonClick}>
          <Button text="Continuer" icon="null" />
        </span>
      </div>
    </section>
  );
};

export default LoginEmailAndPassword;