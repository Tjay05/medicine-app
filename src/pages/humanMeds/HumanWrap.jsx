import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';

// Pic Imports
import searchpic from '../../assets/icons/search.svg';
import notification from '../../assets/icons/notification.svg';
import Popup from '../Popup/Popup';
import { useEffect, useState } from 'react';
import { createContext } from 'react';

const HumanWrapContext = createContext();
const HumanWrap = () => {
  const location = useLocation();
  const history = useNavigate();
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const tosinToken = localStorage.getItem('user');
  const token = JSON.parse(tosinToken);

  const button = location.pathname.includes('/Expired') || location.pathname.includes('/Items-Sold');

  useEffect( () => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch('https://nvmri.onrender.com/user/all/drugs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.token}`,
          },
        });
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    const searchWords = search.toLowerCase().split(' ');
    const filteredStock = data.filter((stock) => {
      const drugName = `${stock.name}`.toLowerCase();
      return searchWords.every((word) => drugName.includes(word));
    });
    setFilteredData(filteredStock);
  }, [search, data]);

  const humanWrapContextValue = {
    isLoading, filteredData
  }

  return ( 
    <>
      <header>
        <div className="headerWrap">
          <nav className="topHeader">
            <h1>Human Medicines</h1>
            <img onClick={() => history('../Notifications')} src={notification} alt="Bell Icon" />
          </nav>
          <div className="bottomHeader tree">
            <div className="searchForm">
              <img src={searchpic} alt="" />
              <input 
                placeholder='Search' 
                type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {!button && (
              <Popup/>
            )}
          </div>
        </div>
      </header>
      <nav className=" wrapper meds">
        <NavLink to='/Human-Medicine'>Available Stock</NavLink>
        <NavLink to='Items-Sold'>Item sold</NavLink>
        <NavLink to='Expired'>Expired</NavLink>
      </nav>
      <main className="wrapper">
        <HumanWrapContext.Provider value={humanWrapContextValue}>
          <Outlet/>
        </HumanWrapContext.Provider>
      </main>
    </>
  );

  
}
 
export default HumanWrap;
export { HumanWrapContext };