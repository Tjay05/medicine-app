import { useNavigate } from 'react-router-dom';
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from 'react';
import { ClipLoader } from "react-spinners";

// Pic Imports
import searchImg from '../assets/icons/search.svg';
import notification from '../assets/icons/notification.svg';

const Employee = () => {
  const tosinToken = localStorage.getItem('user');
  const token = JSON.parse(tosinToken);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);  
  const [filteredData, setFilteredData] = useState([]);

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => setShowPopup(!showPopup);

  const history = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [field, setField] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://nvmri.onrender.com/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.token}`,
        },
        body: JSON.stringify({
          name,
          email,
          phone: Number(phone),
          location: field
        }),
      });
      const data = await res.json()
      if (res.ok) {
        window.location.reload();
      } else if (res.status === 401) {
        console.log(data);
      } else if (res.status === 404) {
        console.log(data);
      } else{
        console.log(data, 'could not add employee');
      }
    }
    catch (error) {
      console.log('Topins error', error);
    }
  }

  useEffect( () => {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const res = await fetch('https://nvmri.onrender.com/user/all', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token.token}`,
            },
          });
          const data = await res.json();
          setData(data);
          setIsLoading(false);
        } catch (err) {
          console.log(err);
          setIsLoading(false);
        }
      }
      fetchData();
    }, [])
  
  useEffect(() => {
    const searchLetters = search.toLowerCase().split(' ');
    const filteredStaffs = data.filter((newEmployee) => {
      const employeeName = `${newEmployee.name}`.toLowerCase();
      return searchLetters.every((letter) => employeeName.includes(letter));
    });
    setFilteredData(filteredStaffs);
  }, [search, data]);
  
  return (
    <>
      <header>
        <div className="headerWrap">
          <nav className="topHeader">
            <h1>Employees</h1>
            <img onClick={() => history('../Notifications')} src={notification} alt="Bell Icon" />
          </nav>
          <div className="bottomHeader tree">
            <div className="searchForm">
              <img src={searchImg} alt=""/>
              <input
                placeholder='Search' type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button onClick={handleClick}>Add new</button>
            { showPopup && (
              <div className="popupForm">
                <form onSubmit={handleSubmit}>
                  <div className="popupFormHeader">
                    <div className="wrapper">
                      <h2>New employee</h2>
                      <GrClose onClick={()=> setShowPopup(false)} size={30} className='closeIcon'/>
                    </div>
                  </div>
                  <div className="formField wrapper">
                    <input 
                      type="text" placeholder='Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div className="twoForms">
                      <div className="firstForm">
                        <label htmlFor="email">Email Address</label><br />
                        <input 
                          type="email" id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="field">Select Drug Type</label><br /> 
                        <select 
                          id="field"
                          value={field}
                          onChange={(e)=> setField(e.target.value)}
                        >
                          <option value="">Select type</option>
                          <option value="Human">Human Medicines</option>
                          <option value="Animal">Animal Medicines</option>
                        </select>
                      </div>
                      <div className="secondForm">
                        <label htmlFor="number">Phone Number</label><br />
                        <input 
                          type="number" id="number" 
                          value={phone}
                          onChange={(e)=> setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <button>Done</button>
                  </div>
                </form>
              </div>
            ) 
            }
          </div>
        </div>
      </header>
      <main className="wrapper employee">
        <div className="availableStock">
          <div className="stockHead">
            <p>Name</p>
            <p>Email</p>
            <p>Phone</p>
            <p>ID</p>
            <p>Action</p>
          </div>
          {isLoading ? (
            <div className="loaded">
              <ClipLoader color="#007bff" className="loadImg" loading={isLoading} size={60}/>
            </div>
          ) : (
            <>
              {filteredData.length > 0 ? (
                filteredData.map((employee)=> (
                  <div className="stockDetails" key={employee.id}>
                    <p>{employee.name}</p>
                    <p>{employee.email}</p>
                    <p>{employee.phone}</p>
                    <p>{employee.id}</p>
                    <p>Remove</p>
                  </div>
                )
                )) : (
                  <p className="notFound">No employee available!!!</p>
                )
              }
            </>
          )}
        </div>
      </main>
    </>
  );
}
 
export default Employee;