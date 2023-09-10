import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { GrClose } from "react-icons/gr";
import { useState } from 'react';

// Pic Imports
import search from '../assets/icons/search.svg';
import notification from '../assets/icons/notification.svg';

const Employee = () => {
  const location = useLocation();
  const button = location.pathname.includes('/Expired')
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    showPopup === false ? setShowPopup(true) : setShowPopup(false)
  }

  const history = useNavigate();
  const notifClicked = () => {
    history('../Notifications')
  }
  return (
    <>
      <header>
        <div className="headerWrap">
          <nav className="topHeader">
            <h1>Employees</h1>
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
                        <h2>New employee</h2>
                        <GrClose onClick={()=> setShowPopup(false)} size={30} className='closeIcon'/>
                      </div>
                    </div>
                    <div className="formField wrapper">
                      <input type="text" placeholder='Name' />
                      <div className="twoForms">
                        <div className="firstForm">
                          <label htmlFor="email">Email Address</label><br />
                          <input type="email" id="email" />
                        </div>
                        <div className="secondForm">
                          <label htmlFor="number">Phone Number</label><br />
                          <input type="number" id="number" />
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
      <main className="wrapper employee">
        <div className="availableStock">
          <div className="stockHead">
            <p>Name</p>
            <p>Email</p>
            <p>Phone</p>
            <p>ID</p>
            <p>Action</p>
          </div>
          <div className="stockDetails">
            <p>Stella Agadi</p>
            <p>stellagadi@gmail.com</p>
            <p>08012345678</p>
            <p>12345HG</p>
            <p>Remove</p>
          </div>
          <div className="stockDetails">
            <p>Stella Agadi</p>
            <p>stellagadi@gmail.com</p>
            <p>08012345678</p>
            <p>12345HG</p>
            <p>Remove</p>
          </div>
        </div>
      </main>
    </>
  );
}
 
export default Employee;