import './DropDown.css';
import Button from '../button/Button';
import { useEffect, useRef, useState } from 'react';

const DropDown = props => {
  const { buttonIcon, buttonText, children } = props;

  const dropDownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => setIsOpen(!isOpen);

  const handleClickOutside = event => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropDownMainContainer" ref={dropDownRef}>
      <Button
        icon={buttonIcon}
        text={buttonText}
        onClick={isOpenHandler}
        style={
          isOpen ? { borderColor: '#d5d5d5', backgroundColor: 'gray' } : {}
        }
      />
      <div className={`dropDownContent ${isOpen ? 'dropDownContentOpen' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default DropDown;
