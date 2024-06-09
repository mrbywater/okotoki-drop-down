import './FilterList.css';
import Button from '../button/Button';
import { useRef, useState } from 'react';
import {
  CodiconClose,
  CodiconSearch,
  CodiconStarEmpty,
  CodiconStarFull,
  SWITCH_BUTTON,
} from '../../constants';

const FilterList = ({ itemsArray }) => {
  const searchInputRef = useRef(null);

  const [switcher, setSwitcher] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [inputOnFocus, setInputOnFocus] = useState(false);

  const switchHandler = value => () => setSwitcher(value);

  const addToFavorites = coin => () => setFavorites([...favorites, coin]);

  const searchInputHandler = event => {
    setSearchValue(event.target.value);
  };

  const clearSearchInput = () => {
    focusInput();
    setSearchValue('');
  };
  const removeFromFavorites = coin => () =>
    setFavorites(favorites.filter(item => item !== coin));

  const coinsList = switcher ? itemsArray : favorites;

  const filteredCoinsList = coinsList.filter(item =>
    item.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const handleFocusBlur = isFocused => () => {
    setInputOnFocus(isFocused);
  };

  const focusInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div className="filterListMainContainer">
      <div className="searchContainer">
        <CodiconSearch
          style={inputOnFocus || searchValue.length ? { color: 'white' } : {}}
        />
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={searchInputHandler}
          onFocus={handleFocusBlur(true)}
          onBlur={handleFocusBlur(false)}
          ref={searchInputRef}
        />
        <CodiconClose
          onClick={clearSearchInput}
          className={searchValue.length ? 'clearSearchInput' : ''}
        />
      </div>
      <div className="coinsListMainContainer">
        <div className="sortContainer">
          {SWITCH_BUTTON.map(button => (
            <Button
              icon={button.icon}
              text={button.name}
              onClick={switchHandler(button.value)}
              style={button.value !== switcher ? { color: '#9f9f9f' } : {}}
              key={`switch_button_${button.value}`}
            />
          ))}
        </div>
        <div className="coinMainContainer">
          {filteredCoinsList.map(coin => (
            <div key={`coin_${coin}`}>
              {favorites.includes(coin) ? (
                <CodiconStarFull onClick={removeFromFavorites(coin)} />
              ) : (
                <CodiconStarEmpty onClick={addToFavorites(coin)} />
              )}
              <span>{coin}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterList;
