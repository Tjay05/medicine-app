// Picture Imports
import medCare from '../assets/images/undraw_medical_care_movn.png'
import logo from '../assets/icons/logo.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState('');

  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://nvmri.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id
        }),
      });
      const data = await response.json()
      setData(data);
      if (response.ok) {
        history('/Home');
        // localStorage.setItem('patient', JSON.stringify({
        //   firstname: data.firstname,
        //   lastname: data.lastname,
        //   email: data.email,
        //   id: data.id,
        //   _id: data._id,
        //   dob: data.DOB,
        //   gender: data.Gender,
        //   nhis: data.NHIS
        // }));
        // setIsLoading(false)
      } else if(response.status === 401) {
          setData(data);
          // setIsLoading(false)
        }else if (response.status === 404){
          setData(data);
          // setIsLoading(false)
        }else{
          setData('Could not login user');
          // setIsLoading(false)
        }
    }
    catch (error) {
      console.log("Topins' Error:", error);
      // setIsLoading(false)
    }
  }

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
              <input 
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder='ID No.' 
                type="text" 
              />
              <p className="err-mssg">{data}</p>
              <button onClick={handleLogin} type='submit'>Continue</button>
            </form>
          </div>
        </section>
      </main>
    </>
   );
}
 
export default Login;