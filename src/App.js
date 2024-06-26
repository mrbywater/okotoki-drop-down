import './App.css';
import DropDown from './components/dropDown/DropDown';
import { useEffect, useState } from 'react';
import FilterList from './components/filterList/FilterList';
import { CodiconSearch } from './constants';

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api-eu.okotoki.com/coins')
      .then(response => response.json())
      .then(data => setCoins([...data]));
  }, []);

  return (
    <div className="appMainContainer">
      <DropDown buttonIcon={<CodiconSearch />} buttonText="SEARCH">
        <FilterList itemsArray={coins} />
      </DropDown>
    </div>
  );
}

export default App;
