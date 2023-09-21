// Pic Imports
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg'
import reciept from '../../assets/icons/reciept.svg'
import sales from '../../assets/icons/sales.svg'

const CashierNavbar = () => {
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
              <li><NavLink to='Sales'>
                <img src={sales} alt="Sales" />
                <p>Sales</p>
              </NavLink></li>
              <li><NavLink to='Cashier-Receipts'>
                <img src={reciept} alt="Receipt" />
                <p>Receipt</p>
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
 
export default CashierNavbar;