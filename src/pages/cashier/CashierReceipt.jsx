// Pic Imports
import { useNavigate } from 'react-router-dom';
import notification from '../../assets/icons/notification.svg'
import search from '../../assets/icons/search.svg'

const CashReciept = () => {
  const history = useNavigate();

  return (
    <>
      <header>
        <div className="headerWrap">
          <nav className="topHeader">
            <h1>Receipt</h1>
            <img onClick={() => history('../Cashier-Notification')} src={notification} alt="Bell Icon" />
          </nav>
          <div className="bottomHeader tree">
            <div className="searchForm">
              <img src={search} alt="Search" />
              <input placeholder='Search' type="text" />
            </div>
          </div>
        </div>
      </header>
      <main className="receipt wrapper">
        <div className="receiptWrapper availableStock">
          <div className="stockHead">
            <p>Name</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Salesperson</p>
          </div>
          <div className="stockDetails">
            <p>Nise Plus Syrup</p>
            <p>10</p>
            <p>N1000</p>
            <p>Stella</p>
          </div>
          <div className="stockDetails">
            <p>Nise Plus Syrup</p>
            <p>10</p>
            <p>N1000</p>
            <p>Stella</p>
          </div>    
        </div>
      </main>
    </>
  );
}
 
export default CashReciept;