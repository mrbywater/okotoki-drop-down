import './FilterList.css';
import { Icon } from '@iconify/react';
import Button from '../button/Button';
import { useState } from 'react';
import { SWITCH_BUTTON } from '../../constants';

const FilterList = ({ itemsArray }) => {
  const [switcher, setSwitcher] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [inputOnFocus, setInputOnFocus] = useState(false);

  const switchHandler = value => () => setSwitcher(value);

  const addToFavorites = coin => () => setFavorites([...favorites, coin]);

  const searchInputHandler = event => {
    setSearchValue(event.target.value);
  };

  const clearSearchInput = () => setSearchValue('');
  const removeFromFavorites = coin => () =>
    setFavorites(favorites.filter(item => item !== coin));

  const coinsList = switcher ? itemsArray : favorites;

  const filteredCoinsList = coinsList.filter(item =>
    item.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const handleFocusBlur = isFocused => () => {
    setInputOnFocus(isFocused);
  };

  return (
    <div className="filterListMainContainer">
      <div className="searchContainer">
        <Icon
          icon="codicon:search"
          style={inputOnFocus ? { color: 'white' } : {}}
        />
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={searchInputHandler}
          onFocus={handleFocusBlur(true)}
          onBlur={handleFocusBlur(false)}
        />
        {!!searchValue.length && (
          <Icon icon="codicon:close" onClick={clearSearchInput} />
        )}
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
                <Icon
                  icon="codicon:star-full"
                  onClick={removeFromFavorites(coin)}
                />
              ) : (
                <Icon
                  icon="codicon:star-empty"
                  onClick={addToFavorites(coin)}
                />
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
