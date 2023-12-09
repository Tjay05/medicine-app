import { useContext } from "react";
import { PopupContext } from "../../../layout/Navbar";

const Carton = ({
  Reminder,
  setReminder,
  carton,
  setCarton,
  pack,
  setPack,
  card,
  setCard,
  tablet,
  setTablet,
  Total_pieces,
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
          <option value={quantity_type}>Carton</option>
          <option value="pack">Packs</option>
          <option value="card">Cards</option>
          <option value="tablet">Tablets</option>
        </select>
        <label htmlFor="carton">Quantity of cartons</label>
        <br />
        <input
          type="number"
          id="carton"
          value={carton}
          onChange={(e) => setCarton(Number(e.target.value))}
        />
        <br />
        <label htmlFor="perpieces">Num. of Cards per pack</label>
        <br />
        <input
          type="number"
          id="percarton"
          value={card}
          onChange={(e) => setCard(Number(e.target.value))}
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
        <label htmlFor="date">Expiry Date</label>
        <br />
        <input
          type="month"
          id="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
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
        <label htmlFor="percarton">Num. of packs per carton</label>
        <br />
        <input
          type="number"
          id="percarton"
          value={pack}
          onChange={(e) => setPack(Number(e.target.value))}
        />
        <br />
        <label htmlFor="pertablets">Num. of tablets per card</label>
        <br />
        <input
          type="number"
          id="pertablets"
          value={tablet}
          onChange={(e) => setTablet(Number(e.target.value))}
        />
        <br />
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

export default Carton;
