import { Link, useNavigate } from 'react-router-dom'

// Pic Imports
import notification from '../assets/icons/notification.svg'
import search from '../assets/icons/search.svg'

const Dashboard = () => {
  const history = useNavigate();
  const notifClicked = () => {
    history('../Notifications')
  }

  return ( 
    <>
      <header>
        <div className="headerWrap">
          <nav className="topHeader">
            <h1>Dashboard</h1>
            <img style={{cursor: 'pointer'}} onClick={notifClicked} src={notification} alt="Bell Icon" />
          </nav>
          {/* <div className="bottomHeader">
            <div className="searchForm">
              <img src={search} alt="Search" />
              <input placeholder='Search' type="text" />
            </div>
          </div> */}
        </div>
      </header>
      <main className="dash wrapper">
        <article onClick={() => history('../Human-Medicine')}>
          <p>Human Medicines</p>
          <p className='numAvailable'>7</p>
        </article>
        <article onClick={() => history('../Animal-Medicine')}>
          <p>Animal Medicines</p>
          <p className='numAvailable'>22</p>
        </article>
      </main>
    </>
  );
}
 
export default Dashboard;