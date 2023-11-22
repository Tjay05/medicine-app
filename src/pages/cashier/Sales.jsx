import { useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

// Pic Imports
import notification from "../../assets/icons/notification.svg";
import search from "../../assets/icons/search.svg";

const Sales = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    showPopup === false ? setShowPopup(true) : setShowPopup(false);
  };

  const history = useNavigate();

  return (
    <>
      <header>
        <div className="headerWrap">
          <nav className="topHeader">
            <h1>Sales</h1>
            <img
              onClick={() => history("../Cashier-Notification")}
              src={notification}
              alt="Bell Icon"
            />
          </nav>
          <div className="bottomHeader tree">
            <div className="searchForm">
              <img src={search} alt="Search" />
              <input placeholder="Search" type="text" />
            </div>
            <button onClick={handleClick}>Add new sale</button>
            {showPopup && (
              <div className="popupForm">
                <form>
                  <div className="popupFormHeader">
                    <div className="wrapper">
                      <h2>New employee</h2>
                      <GrClose
                        onClick={() => setShowPopup(false)}
                        size={30}
                        className="closeIcon"
                      />
                    </div>
                  </div>
                  <div className="formField wrapper">
                    <input type="text" placeholder="Name" />
                    <div className="twoForms">
                      <div className="firstForm">
                        <label htmlFor="email">Email Address</label>
                        <br />
                        <input type="email" id="email" />
                      </div>
                      <div className="secondForm">
                        <label htmlFor="number">Phone Number</label>
                        <br />
                        <input type="number" id="number" />
                      </div>
                    </div>
                    <button>Done</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </header>
      <main className="cashierSales wrapper">
        <div className="availableStock">
          <div className="stockHead">
            <p>Name</p>
            <p>Cartons</p>
            <p>Packs</p>
            <p>Tablets</p>
            <p>Price</p>
            <p>Net weight</p>
            <p>Date</p>
            <p>Action</p>
          </div>
          <div className="stockDetails">
            <p>Nise Plus Syrup</p>
            <p>1</p>
            <p>20</p>
            <p>10</p>
            <p>₦ 1000</p>
            <p>100ml</p>
            <p>02/03/23</p>
            <button>View All</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Sales;
