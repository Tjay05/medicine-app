// Picture Imports
import medCare from '../assets/images/undraw_medical_care_movn.png'
import logo from '../assets/icons/logo.svg'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();
  return ( 
    <>
      <main className='loginMain'>
        <aside>
          <img src={medCare} alt="Effortless" />
          <p>Effortlessly manage medicine inventory - track, organize, and stay informed</p>
        </aside>
        <section>
          <nav>
            <img src={logo} alt="Logo" />
            <p>Medicine App</p>
          </nav>
          <div className="loginBody">
            <h1>Log in</h1>
            <p>Please input your credentials to continue using this app</p>
            <form>
              <input placeholder='ID No.' type="text" />
              <button onClick={() => history('Home')} type='submit'>Continue</button>
            </form>
          </div>
        </section>
      </main>
    </>
   );
}
 
export default Login;