import './DropDown.css';
import Button from '../button/Button';
import { useEffect, useRef, useState } from 'react';

const DropDown = props => {
  const { buttonIcon, buttonText, children } = props;

  const dropDownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [dropDownPosition, setDropDownPosition] = useState({ left: 0 });

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      logDropDownPosition();
    }
  };
  const handleClickOutside = event => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const logDropDownPosition = () => {
    const dropdown = dropDownRef.current;
    const rect = dropdown.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const isTop = rect.top < windowHeight / 2;
    const isLeft = rect.left < windowWidth / 2;

    if (isTop && isLeft) {
      setDropDownPosition({
        left: 0,
      });
    } else if (isTop && !isLeft) {
      setDropDownPosition({
        right: 0,
      });
    } else if (!isTop && isLeft) {
      setDropDownPosition({
        bottom: '100%',
        left: 0,
      });
    } else {
      setDropDownPosition({
        bottom: '100%',
        right: 0,
      });
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', logDropDownPosition);
    window.addEventListener('resize', logDropDownPosition);

    logDropDownPosition();

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', logDropDownPosition);
      window.removeEventListener('resize', logDropDownPosition);
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
      <div
        className={`dropDownContent ${isOpen ? 'dropDownContentOpen' : ''}`}
        style={dropDownPosition}>
        {children}
      </div>
    </div>
  );
};

export default DropDown;
