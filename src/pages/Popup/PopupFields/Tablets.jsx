import { useContext } from "react";
import { PopupContext } from "../../../layout/Navbar";

const Tablets = ({
  Reminder,
  setReminder,
  tablet,
  setTablet,
  setTotal_pieces,
  weight,
  setWeight,
  price,
  setPrice,
  expiryDate,
  setExpiryDate,
}) => {
  const { quantity_type, handleTypeChange } = useContext(PopupContext);

  return (
    <>
      <div className="firstForm">
        <label htmlFor="type">Quantity Type</label>
        <br />
        <select value={quantity_type} onChange={handleTypeChange} id="type">
          <option value={quantity_type}>Tablet</option>
          <option value="carton">Carton</option>
          <option value="pack">Packs</option>
          <option value="card">Cards</option>
        </select>
        <label htmlFor="piece">Quantity of tablets</label>
        <br />
        <input
          type="number"
          id="piece"
          value={tablet}
          onChange={(e) => setTablet(Number(e.target.value))}
        />
        <br />
        <label htmlFor="weight">Net weight (gm/ml)s</label>
        <br />
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br />
      </div>
      <div className="secondForm">
        <label htmlFor="reminder">Set Timer (Reminder)</label>
        <br />
        <input
          type="text"
          id="reminder"
          value={Reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
        <br />
        {/* <select id="reminder">
          <option value="">Remind on Tue</option>
        </select> */}
        <label htmlFor="date">Expiry Date</label>
        <br />
        <input
          type="month"
          id="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <label htmlFor="price">Price NGN</label>
        <br />
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
    </>
  );
};

export default Tablets;
