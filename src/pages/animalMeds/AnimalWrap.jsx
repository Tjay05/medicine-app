import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';

// Pic Imports
import search from '../../assets/icons/search.svg';
import notification from '../../assets/icons/notification.svg';
import Popup from '../Popup/Popup';

const AnimalWrap = () => {
  const location = useLocation();
  const history = useNavigate();

  const button = location.pathname.includes('/Expired') || location.pathname.includes('/Items-Sold');

  return ( 
    <>
      <header>
        <div className="headerWrap">
          <nav className="topHeader">
            <h1>Animal Medicines</h1>
            <img onClick={() => history('../Notifications')} src={notification} alt="Bell Icon" />
          </nav>
          <div className="bottomHeader tree">
            <div className="searchForm">
              <img src={search} alt="" />
              <input placeholder='Search' type="text" />
            </div>
            {!button && (
              <Popup/>
            )}
          </div>
        </div>
      </header>
      <nav className=" wrapper meds">
        <NavLink to='/Animal-Medicine/'>Available Stock</NavLink>
        <NavLink to='Items-Sold'>Item sold</NavLink>
        <NavLink to='Expired'>Expired</NavLink>
      </nav>
      <main className="wrapper">
        <Outlet/>
      </main>
    </>
  );
}
 
export default AnimalWrap;