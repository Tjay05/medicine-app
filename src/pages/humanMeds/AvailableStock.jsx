import { useState } from "react";
import { useEffect } from "react";
import { GrEdit } from "react-icons/gr";
import { ClipLoader } from "react-spinners";

const AvailStock = () => {
  const tosinToken = localStorage.getItem('user');
  const token = JSON.parse(tosinToken);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect( () => {
    setIsLoading(true);
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
        setData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
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
        {isLoading ? (
          <div className="loaded">
            <ClipLoader color="#007bff" className="loadImg" loading={isLoading} size={60}/>
          </div>
        ) : (<>
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
        </>)}
      </div>
    </>
  );
}
 
export default AvailStock;