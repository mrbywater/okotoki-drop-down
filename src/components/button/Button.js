import './Button.css';
import { Icon } from '@iconify/react';

const Button = props => {
  const { icon, text, ...rest } = props;

  return (
    <button {...rest} className="buttonMainContainer">
      {icon && <Icon icon={`codicon:${icon}`} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
