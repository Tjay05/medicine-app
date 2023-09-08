// Picture Imports
import logo from '../assets/icons/logo.svg';
import dashIcon from '../assets/icons/dashboard.svg';
import humanMed from '../assets/icons/hmuanMeds.svg';
import reciept from '../assets/icons/reciept.svg';
import employee from '../assets/icons/employees.svg';

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
              <li><a>
                <img src={dashIcon} alt="Dashboard" />
                <p>Dashboard</p>
              </a></li>
              <li><a>
                <img src={humanMed} alt="Human Medicines" />
                <p>Human Medicines</p>
              </a></li>
              <li><a>
                <img src={humanMed} alt="Animal Medicines" />
                <p>Animal Medicines</p>
              </a></li>
              <li><a>
                <img src={reciept} alt="Receipt" />
                <p>Receipt</p>
              </a></li>
              <li><a>
                <img src={employee} alt="Employees" />
                <p>Employees</p>
              </a></li>
            </ul>
          </nav>
        </aside>
        <section className='content'></section>
      </main>
    </>
  );
}
 
export default Navbar;