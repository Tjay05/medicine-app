// Picture Imports
import logo from '../assets/icons/logo.svg';
import dashIcon from '../assets/icons/dashboard.svg';
import humanMed from '../assets/icons/hmuanMeds.svg';
import reciept from '../assets/icons/reciept.svg';
import employee from '../assets/icons/employees.svg';
import { Outlet, NavLink } from 'react-router-dom'

const Navbar = () => {
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
              <li><NavLink to='Animal'>
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
          <Outlet/>
        </section>
      </main>
    </>
  );
}
 
export default Navbar;