import './Button.css';

const Button = props => {
  const { icon, text, ...rest } = props;

  return (
    <button {...rest} className="buttonMainContainer">
      {icon && icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
