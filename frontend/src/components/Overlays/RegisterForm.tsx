import { useState } from "react";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { useOverlay } from "@contexts/OverlayContext";
import { useAuth } from "@contexts/AuthContext";
import { createAccount } from "@services/AuthService";
import Selector from "../UI/Selector";
import { mockRoles } from "@/mocks/mockRoles";

const RegisterForm = () => {
  const { setIsLoginEmail, setIsRegisterForm, setIsLoading } = useOverlay();
  const { setEmail: setContextEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(0);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);




  /**
   * Function to handle the back button click
   */
  const handleBackClick = () => {
    setIsLoginEmail(false);
    setIsRegisterForm(false);
  };



  /**
   * Function to handle the email change on every input
   * @param e 
   */
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };



  /**
   * Function to handle the nkame change on every input
   * @param e 
   */
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };



  /**
  * Function to handle the password change on every input
  * @param e 
  */
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };


  /**
  * Function to handle the role change on every input
  * @param e 
  */
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(parseInt(e.target.value));
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
      const response = await createAccount(name, email, password, role);
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
          Formulaire d'inscription
        </h2>
      </header>

      <p className="overlay__description">
      Nous vérifions que vous avez déjà un compte.
      </p>
      <div className="overlay__form">

        <Input icon="react" type="text" label="Nom" value={name}
          onChange={handleNameChange} placeholder="votre nom" />

        <Input icon="react" type="text" label="Adresse e-mail" value={email}
          onChange={handleEmailChange} placeholder="votre-email@exemple.com" />

        <Input icon="react" type="password" label="Mot de passe" value={password}
          onChange={handlePasswordChange} placeholder="votre mot de passe" />
        {error && <p className="error-message">{error}</p>}

        <Selector icon="react" data={mockRoles} value={role}
        onChange={handleRoleChange} />

        <span onClick={handleButtonClick}>
          <Button text="Continuer" icon="null" />
        </span>
      </div>
    </section>
  );
};

export default RegisterForm;