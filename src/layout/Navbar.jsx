// Picture Imports
import logo from '../assets/icons/logo.svg';
import dashIcon from '../assets/icons/dashboard.svg';
import humanMed from '../assets/icons/hmuanMeds.svg';
import reciept from '../assets/icons/reciept.svg';
import employee from '../assets/icons/employees.svg';
import { Outlet, NavLink } from 'react-router-dom'
import { createContext, useState } from 'react';

const PopupContext = createContext();
const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => setShowPopup(!showPopup);
  // Special
  const [quantity_type, setQuantity_type] = useState('');
  const handleTypeChange = (e) => setQuantity_type(e.target.value);


  const popupContextValue = {
    showPopup, setShowPopup,
    quantity_type, setQuantity_type,
    handleClick, handleTypeChange
  }

  return ( 
    <>
      <main className='navbarContent'>
        <aside className='nav'>
          <nav className='container'>
            <ul>
              <li><a>
                <img src={logo} alt="Logo" />
                <p>Medicine App</p>
              </a></li>
              <li><NavLink to='/Home'>
                <img src={dashIcon} alt="Dashboard" />
                <p>Dashboard</p>
              </NavLink></li>
              <li><NavLink to='Human-Medicine'>
                <img src={humanMed} alt="Human Medicines" />
                <p>Human Medicines</p>
              </NavLink></li>
              <li><NavLink to='Animal-Medicine'>
                <img src={humanMed} alt="Animal Medicines" />
                <p>Animal Medicines</p>
              </NavLink></li>
              <li><NavLink to='Receipt'>
                <img src={reciept} alt="Receipt" />
                <p>Receipt</p>
              </NavLink></li>
              <li><NavLink to='Employee'>
                <img src={employee} alt="Employees" />
                <p>Employees</p>
              </NavLink></li>
            </ul>
          </nav>
        </aside>
        <section className='content'>
          <PopupContext.Provider value={popupContextValue}>
            <Outlet/>
          </PopupContext.Provider>
        </section>
      </main>
    </>
  );
}
 
export default Navbar;
export { PopupContext };