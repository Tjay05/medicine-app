import { Outlet, NavLink } from 'react-router-dom';

// Pic Imports
import search from '../../assets/icons/search.svg';
import notification from '../../assets/icons/notification.svg';

const HumanWrap = () => {
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
            <button>Add new</button>
          </div>
        </div>
      </header>
      <nav className=" wrapper meds">
        <NavLink to='/Human'>Available Stock</NavLink>
        <NavLink>Item sold</NavLink>
        <NavLink>Expired</NavLink>
      </nav>
      <main className="wrapper">
        <Outlet/>
      </main>
    </>
  );
}
 
export default HumanWrap;