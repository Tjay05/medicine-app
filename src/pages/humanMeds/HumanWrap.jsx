import { Outlet, NavLink, useLocation } from 'react-router-dom';

// Pic Imports
import search from '../../assets/icons/search.svg';
import notification from '../../assets/icons/notification.svg';


const HumanWrap = () => {
  const location = useLocation();
  const button = location.pathname.includes('/Expired')
  return ( 
    <>
      <header>
        <div className="headerWrap">
          <nav className="topHeader">
            <h1>Human Medicines</h1>
            <img src={notification} alt="Bell Icon" />
          </nav>
          <div className="bottomHeader tree">
            <div className="searchForm">
              <img src={search} alt="" />
              <input placeholder='Search' type="text" />
            </div>
            {!button && <button>Add new</button>}
          </div>
        </div>
      </header>
      <nav className=" wrapper meds">
        <NavLink to='/Human-Medicine/'>Available Stock</NavLink>
        <NavLink to='Items-Sold'>Item sold</NavLink>
        <NavLink to='Expired'>Expired</NavLink>
      </nav>
      <main className="wrapper">
        <Outlet/>
      </main>
    </>
  );
}
 
export default HumanWrap;