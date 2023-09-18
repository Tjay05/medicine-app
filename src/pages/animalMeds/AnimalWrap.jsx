import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { GrClose } from "react-icons/gr";

// Pic Imports
import search from '../../assets/icons/search.svg';
import notification from '../../assets/icons/notification.svg';
import { useState } from 'react';

const AnimalWrap = () => {
  const location = useLocation();
  const history = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  const button = location.pathname.includes('/Expired') || location.pathname.includes('/Items-Sold');

  const handleClick = () => setShowPopup(!showPopup);  
  
  const handlePopupClose = () => {
    setShowPopup(false);
    window.location.reload();
  };

  const handleTypeChange = (e) => setSelectedType(e.target.value);

  const renderPopupContent = () => {
    if (selectedType === 'Carton') {
      return (
        <>
          <div className="firstForm">
            <label htmlFor="type">Quantity Type</label><br />
            <select value={selectedType} onChange={handleTypeChange} id="type">
              <option value={selectedType}>{selectedType}</option>  
              <option value="Packs">Packs</option>
              <option value="Cards">Cards</option>
              <option value="Tablets">Tablets</option>
            </select>
            <label htmlFor="carton">Quantity of cartons</label><br />
            <input type="number" id='carton' /><br />
            <label htmlFor="perpieces">Num. of Cards per pack</label><br />
            <input type="number" id='percarton' /><br />
            <label htmlFor="weight">Net weight (gm/ml)s</label><br />
            <input type="text" id='weight' /><br />
            <label htmlFor="date">Expiry Date</label><br />
            <input type="month" id="date" />
          </div>
          <div className="secondForm">
            <label htmlFor="reminder">Set Timer (Reminder)</label><br />
            <input type="text" id='reminder' /><br />
            {/* <select id="reminder">
              <option value="">Remind on Tue</option>
            </select> */}
            <label htmlFor="percarton">Num. of packs per carton</label><br />
            <input type="number" id='percarton' /><br />
            <label htmlFor="pertablets">Num. of tablets per card</label><br />
            <input type="number" id='pertablets' /><br />
            <label htmlFor="total">Total Tablets</label><br />
            <input disabled type="number" id="total" />
            <label htmlFor="price">Price NGN</label><br />
            <input type="number" id="price" />
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
              <option value="Cards">Cards</option>
              <option value="Tablets">Tablets</option>
            </select>
            <label htmlFor="pack">Quantity of packs</label><br />
            <input type="number" id='pack' /><br />
            <label htmlFor="pertablets">Num. of tablets per card</label><br />
            <input type="number" id='pertablets' /><br />
            <label htmlFor="weight">Net weight (gm/ml)s</label><br />
            <input type="text" id='weight' /><br />
            <label htmlFor="price">Price NGN</label><br />
            <input type="number" id="price" />
          </div>
          <div className="secondForm">
            <label htmlFor="reminder">Set Timer (Reminder)</label><br />
            <input type="text" id='reminder' /><br />
            {/* <select id="reminder">
              <option value="">Remind on Tue</option>
            </select> */}
            <label htmlFor="perpieces">Num. of Cards per pack</label><br />
            <input type="number" id='percarton' /><br />
            <label htmlFor="total">Total Tablets</label><br />
            <input disabled type="number" id="total" />
            <label htmlFor="date">Expiry Date</label><br />
            <input type="month" id="date" />
          </div>
        </>
      );
    } else if (selectedType === 'Cards') {
      return (
        <>
          <div className="firstForm">
            <label htmlFor="type">Quantity Type</label><br />
            <select value={selectedType} onChange={handleTypeChange} id="type">
              <option value={selectedType}>{selectedType}</option>
              <option value="Carton">Carton</option>
              <option value="Packs">Packs</option>
              <option value="Tablets">Tablets</option>
            </select>
            <label htmlFor="piece">Quantity of cards</label><br />
            <input type="number" id='piece' /><br />
            <label htmlFor="total">Total Tablets</label><br />
            <input disabled type="number" id="total" />
            <label htmlFor="date">Expiry Date</label><br />
            <input type="month" id="date" />
          </div>
          <div className="secondForm">
            <label htmlFor="reminder">Set Timer (Reminder)</label><br />
            <input type="text" id='reminder' /><br />
            {/* <select id="reminder">
              <option value="">Remind on Tue</option>
            </select> */}
            <label htmlFor="pertablets">Num. of tablets per card</label><br />
            <input type="number" id='pertablets' /><br />
            <label htmlFor="weight">Net weight (gm/ml)s</label><br />
            <input type="text" id='weight' /><br />
            <label htmlFor="price">Price NGN</label><br />
            <input type="number" id="price" />
          </div>
        </>
      );
    } else if (selectedType === 'Tablets') {
      return (
        <>
          <div className="firstForm">
            <label htmlFor="type">Quantity Type</label><br />
            <select value={selectedType} onChange={handleTypeChange} id="type">
              <option value={selectedType}>{selectedType}</option>
              <option value="Carton">Carton</option>
              <option value="Packs">Packs</option>
              <option value="Cards">Cards</option>
            </select>
            <label htmlFor="piece">Quantity of tablets</label><br />
            <input type="number" id='piece' /><br />
            <label htmlFor="weight">Net weight (gm/ml)s</label><br />
            <input type="text" id='weight' /><br />
            <label htmlFor="price">Price NGN</label><br />
            <input type="number" id="price" />
          </div>
          <div className="secondForm">
            <label htmlFor="reminder">Set Timer (Reminder)</label><br />
            <input type="text" id='reminder' /><br />
            {/* <select id="reminder">
              <option value="">Remind on Tue</option>
            </select> */}
            <label htmlFor="total">Total tablets</label><br />
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
            <h1>Animal Medicines</h1>
            <img onClick={() => history('../Notifications')} src={notification} alt="Bell Icon" />
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
                          <GrClose onClick={handlePopupClose} size={30} className='closeIcon'/>
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
                                <option value="Cards">Cards</option>
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