// Pic Imports
import notification from '../assets/icons/notification.svg'
import search from '../assets/icons/search.svg'

const Dashboard = () => {
  return ( 
    <>
      <header>
        <div className="headerWrap">
          <nav className="topHeader">
            <h1>Dashboard</h1>
            <img src={notification} alt="Bell Icon" />
          </nav>
          <div className="bottomHeader">
            <div className="searchForm">
              <img src={search} alt="" />
              <input placeholder='Search' type="text" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
 
export default Dashboard;