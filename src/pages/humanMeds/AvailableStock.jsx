import { useState } from "react";
import { useEffect } from "react";
import { GrEdit } from "react-icons/gr";

const AvailStock = () => {
  const tosinToken = localStorage.getItem('user');
  const token = JSON.parse(tosinToken);

  const [data, setData] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://nvmri.onrender.com/user/all/drugs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.token}`,
          },
        });
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [])

  return ( 
    <>
      <div className="availableStock">
        <div className="stockHead">
          <p>Name</p>
          <p>Quantity type</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Expiry Date</p>
        </div>
        {data && data.map ((drug) => (
          <div className="stockDetails" key={drug._id}>
            <p>{drug.name}</p>
            <p>{drug.quantity_type}</p>
            <p>
              {drug.quantity_type==='carton' ? drug.carton : drug.quantity_type==='pack' ? drug.pack : drug.quantity_type==='card' ? drug.card : drug.tablet}
            </p>
            <p>₦ {drug.price}</p>
            <div className="date">
              <p>{drug.expiryDate}</p>
              <GrEdit/>
            </div>
          </div>
          )
        )}
      </div>
    </>
  );
}
 
export default AvailStock;