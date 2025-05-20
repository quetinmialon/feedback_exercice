import { InputFieldProps } from "@/models/Form";

const Input: React.FC<InputFieldProps> = ({ label, icon, placeholder, type, value, onChange }) => {
  return (
    <>
      <form action="" className="form">
        <img className="btn__svg" src={`./public/assets/img/buttons/white/${icon}.svg`} />
        <div className="form__field">
          <label htmlFor={label} className="form__label">{label}</label>
          <input id={label} type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
      </form>
    </>
  );
};

export default Input;