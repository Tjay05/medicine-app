import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { GrClose } from "react-icons/gr";

// Pic Imports
import search from '../../assets/icons/search.svg';
import notification from '../../assets/icons/notification.svg';
import { useState } from 'react';


const AnimalWrap = () => {
  const location = useLocation();
  const button = location.pathname.includes('/Expired');
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    showPopup === false ? setShowPopup(true) : setShowPopup(false)
  }

  return ( 
    <>
      <header>
        <div className="headerWrap">
          <nav className="topHeader">
            <h1>Animal Medicines</h1>
            <img src={notification} alt="Bell Icon" />
          </nav>
          <div className="bottomHeader tree">
            <div className="searchForm">
              <img src={search} alt="" />
              <input placeholder='Search' type="text" />
            </div>
            {!button && (
              <>
                <button onClick={handleClick}>Add new</button>
                { showPopup && (
                  <div className="popupForm">
                    <form>
                      <div className="popupFormHeader">
                        <div className="wrapper">
                          <h2>Animal Medicine</h2>
                          <GrClose size={30} className='closeIcon'/>
                        </div>
                      </div>
                      <div className="formField">
                        
                      </div>
                    </form>
                  </div>
                )
                }
              </>
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