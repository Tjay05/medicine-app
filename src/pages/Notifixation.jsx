// Pic Imports
import search from '../assets/icons/search.svg';
import notification from '../assets/icons/notification.svg';
import exclaim from '../assets/icons/exclame.svg';
import { useState } from 'react';

const Notification = () => {
  return ( 
    <>
      <header>
        <div className="headerWrap">
          <nav className="topHeader">
            <h1>Notifications</h1>
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
      <main className="notification wrapper">
        <div className="notification-preview">
          <p className="notification-message">Nise syrup is expiring soon. Ensure timely replacement to maintain the safety of your patients.</p>
          <img src={exclaim} alt="" />
        </div>
      </main>
    </>
  );
}
 
export default Notification;