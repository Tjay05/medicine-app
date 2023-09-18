import { useContext } from "react";
import { PopupContext } from "../../../layout/Navbar";

const Tablets = () => {
  const { selectedType, handleTypeChange } = useContext(PopupContext);

  return (
    <>
      <div className="firstForm">
        <label htmlFor="type">Quantity Type</label><br />
        <select value={selectedType} onChange={handleTypeChange} id="type">
          <option value={selectedType}>{selectedType}</option>
          <option value="Carton">Carton</option>
          <option value="Packs">Packs</option>
          <option value="Cards">Cards</option>
        </select>
        <label htmlFor="piece">Quantity of tablets</label><br />
        <input type="number" id='piece' /><br />
        <label htmlFor="weight">Net weight (gm/ml)s</label><br />
        <input type="text" id='weight' /><br />
        <label htmlFor="price">Price NGN</label><br />
        <input type="number" id="price" />
      </div>
      <div className="secondForm">
        <label htmlFor="reminder">Set Timer (Reminder)</label><br />
        <input type="text" id='reminder' /><br />
        {/* <select id="reminder">
          <option value="">Remind on Tue</option>
        </select> */}
        <label htmlFor="total">Total tablets</label><br />
        <input disabled type="number" id="total" />
        <label htmlFor="date">Expiry Date</label><br />
        <input type="month" id="date" />
      </div>
    </>
  );
}
 
export default Tablets;