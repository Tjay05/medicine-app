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
                          <GrClose onClick={()=> setShowPopup(false)} size={30} className='closeIcon'/>
                        </div>
                      </div>
                      <div className="formField wrapper">
                        <input type="text" placeholder='Name' />
                        <div className="twoForms">
                          <div className="firstForm">
                            <label htmlFor="type">Quantity Type</label><br />
                            <select id="type">
                              <option>Select Type</option>
                              <option value="Carton">Carton</option>
                              <option value="Pieces">Pieces</option>
                            </select>
                            <label htmlFor="carton">Quantity of cartons/pieces</label><br />
                            <input type="text" id='carton' /><br />
                            <label htmlFor="price">Price NGN</label><br />
                            <input type="number" id="price" />
                          </div>
                          <div className="secondForm">
                            <label htmlFor="Shelf">Shelf Life</label><br />
                            <input type="text" id='Shelf' /><br />
                            <label htmlFor="weight">Net weight (gm/ml)s</label><br />
                            <input type="text" id='weight' /><br />
                            <label htmlFor="date">Expiry Date</label><br />
                            <input type="date" id="date" />
                          </div>
                        </div>
                        <button>Done</button>
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