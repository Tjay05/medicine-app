import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { GrClose } from "react-icons/gr";

// Pic Imports
import search from '../../assets/icons/search.svg';
import notification from '../../assets/icons/notification.svg';
import { useState } from 'react';

const HumanWrap = () => {
  const location = useLocation();
  const button = location.pathname.includes('/Expired') || location.pathname.includes('/Items-Sold');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  const handleClick = () => {
    setShowPopup(!showPopup);
  }
  
  const handlePopupClose = () => {
    setShowPopup(false);
    window.location.reload();
  };

  const history = useNavigate();
  const notifClicked = () => {
    history('../Notifications')
  }

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  }

  const renderPopupContent = () => {
    if (selectedType === 'Carton') {

      return (
        <>
          <div className="firstForm">
            <label htmlFor="type">Quantity Type</label><br />
            <select value={selectedType} onChange={handleTypeChange} id="type">
              <option value={selectedType}>{selectedType}</option>
              <option value="Packs">Packs</option>
              <option value="Pieces">Pieces</option>
            </select>
            <label htmlFor="carton">Quantity of cartons</label><br />
            <input type="number" id='carton' /><br />
            <label htmlFor="perpieces">Num. of Pieces per pack</label><br />
            <input type="number" id='percarton' /><br />
            <label htmlFor="weight">Net weight (gm/ml)s</label><br />
            <input type="text" id='weight' /><br />
            <label htmlFor="price">Price NGN</label><br />
            <input type="number" id="price" />
          </div>
          <div className="secondForm">
            <label htmlFor="reminder">Reminder</label><br />
            <select id="reminder">
              <option value="">Remind on Tue</option>
            </select>
            <label htmlFor="percarton">Num. of packs per carton</label><br />
            <input type="number" id='percarton' /><br />
            <label htmlFor="total">Total Pieces</label><br />
            <input disabled type="number" id="total" />
            <label htmlFor="date">Expiry Date</label><br />
            <input type="month" id="date" />
          </div>
        </>
      );
    } else if (selectedType === 'Packs') {
      return (
        <>
          <div className="firstForm">
            <label htmlFor="type">Quantity Type</label><br />
            <select value={selectedType} onChange={handleTypeChange} id="type">
              <option value={selectedType}>{selectedType}</option>
              <option value="Carton">Carton</option>
              <option value="Pieces">Pieces</option>
            </select>
            <label htmlFor="pack">Quantity of packs</label><br />
            <input type="number" id='pack' /><br />
            <label htmlFor="perpieces">Num. of Pieces per pack</label><br />
            <input type="number" id='percarton' /><br />
            <label htmlFor="price">Price NGN</label><br />
            <input type="number" id="price" />
          </div>
          <div className="secondForm">
            <label htmlFor="reminder">Reminder</label><br />
            <select id="reminder">
              <option value="">Remind on Tue</option>
            </select>
            <label htmlFor="weight">Net weight (gm/ml)s</label><br />
            <input type="text" id='weight' /><br />
            <label htmlFor="total">Total Pieces</label><br />
            <input disabled type="number" id="total" />
            <label htmlFor="date">Expiry Date</label><br />
            <input type="month" id="date" />
          </div>
        </>
      );
    } else if (selectedType === 'Pieces') {
      return (
        <>
          <div className="firstForm">
            <label htmlFor="type">Quantity Type</label><br />
            <select value={selectedType} onChange={handleTypeChange} id="type">
              <option value={selectedType}>{selectedType}</option>
              <option value="Carton">Carton</option>
              <option value="Pieces">Packs</option>
            </select>
            <label htmlFor="piece">Quantity of pieces</label><br />
            <input type="number" id='piece' /><br />
            <label htmlFor="price">Price NGN</label><br />
            <input type="number" id="price" />
          </div>
          <div className="secondForm">
            <label htmlFor="reminder">Reminder</label><br />
            <select id="reminder">
              <option value="">Remind on Tue</option>
            </select>
            <label htmlFor="weight">Net weight (gm/ml)s</label><br />
            <input type="text" id='weight' /><br />
            <label htmlFor="total">Total Pieces</label><br />
            <input disabled type="number" id="total" />
            <label htmlFor="date">Expiry Date</label><br />
            <input type="month" id="date" />
          </div>
        </>
      );
    } else {
      return null;
    }
  }

  return ( 
    <>
      <header>
        <div className="headerWrap">
          <nav className="topHeader">
            <h1>Human Medicines</h1>
            <img style={{cursor: 'pointer'}} onClick={notifClicked} src={notification} alt="Bell Icon" />
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
                        <h2>Human Medicine</h2>
                        <GrClose onClick={()=> setShowPopup(false)} size={30} className='closeIcon'/>
                      </div>
                    </div>
                    <div className="formField wrapper">
                      <input type="text" placeholder='Name' />
                      <div className="twoForms">
                          {selectedType ? (
                            <>
                              {renderPopupContent()}
                            </>
                          ) : (
                            <div className="firstForm">
                              <label htmlFor="type">Quantity Type</label><br />
                              <select value={selectedType} onChange={handleTypeChange} id="type">
                                <option>Select Type</option>
                                <option value="Carton">Carton</option>
                                <option value="Packs">Packs</option>
                                <option value="Pieces">Pieces</option>
                              </select>
                            </div>
                          )}
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