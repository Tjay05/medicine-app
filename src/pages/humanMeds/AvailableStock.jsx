// Pic Imports
import edit from '../../assets/icons/edit.svg';

const AvailStock = () => {
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
        <div className="stockDetails">
          <p>Nise Plus Syrup</p>
          <p>Carton</p>
          <p>10</p>
          <p>#2000</p>
          <div className="date">
            <p>June 2022</p>
            <img src={edit} alt="Edit" />
          </div>
        </div>
        <div className="stockDetails">
          <p>Nise Plus Syrup</p>
          <p>Carton</p>
          <p>10</p>
          <p>#2000</p>
          <div className="date">
            <p>June 2022</p>
            <img src={edit} alt="Edit" />
          </div>
        </div>
      </div>
    </>
  );
}
 
export default AvailStock;