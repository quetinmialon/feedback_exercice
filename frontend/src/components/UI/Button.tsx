//////////////////////////////////////////
///////////    IMPORTATIONS     //////////
//////////////////////////////////////////


// import models
import { ButtonModel } from "@models/Button";



//////////////////////////////////////////
///////////    COMPONENT     /////////////
//////////////////////////////////////////

const Button: React.FC<ButtonModel> = ({ text, icon }) => {
  // console.log('\x1b[30m%s\x1b[0m', 'Button-cta.tsx rendered');



  /////////////////////////////////////
  ///////////    VIEW     /////////////
  /////////////////////////////////////
  return (
    <>
      <button className="btn">
        <span>{text}</span>

        {icon === "null" ? null : (
          <img className="btn__svg " src={`assets/img/buttons/white/${icon}.svg`} />
        )}
      </button>
    </>
  );
};

export default Button;