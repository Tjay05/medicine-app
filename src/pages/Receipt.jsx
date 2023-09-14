// import { Document, Page, Text, View, StyleSheet } from 'react-pdf';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


// Pic Imports
import search from '../assets/icons/search.svg';
import notification from '../assets/icons/notification.svg';

const Receipt = () => {
  return ( 
    <>
      <header>
        <div className="headerWrap">
          <nav className="topHeader">
            <h1>Receipt</h1>
            <img src={notification} alt="Bell Icon" />
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
 
export default Receipt;