import { useContext } from "react";
import { PopupContext } from "../../../layout/Navbar";

const Packs = () => {
  const { selectedType, handleTypeChange } = useContext(PopupContext);

  return ( 
    <>
      <div className="firstForm">
        <label htmlFor="type">Quantity Type</label><br />
        <select value={selectedType} onChange={handleTypeChange} id="type">
          <option value={selectedType}>{selectedType}</option>
          <option value="Carton">Carton</option>
          <option value="Cards">Cards</option>
          <option value="Tablets">Tablets</option>
        </select>
        <label htmlFor="pack">Quantity of packs</label><br />
        <input type="number" id='pack' /><br />
        <label htmlFor="pertablets">Num. of tablets per card</label><br />
        <input type="number" id='pertablets' /><br />
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
        <label htmlFor="perpieces">Num. of Cards per pack</label><br />
        <input type="number" id='percarton' /><br />
        <label htmlFor="total">Total Tablets</label><br />
        <input disabled type="number" id="total" />
        <label htmlFor="date">Expiry Date</label><br />
        <input type="month" id="date" />
      </div>
    </>
  );
}
 
export default Packs;