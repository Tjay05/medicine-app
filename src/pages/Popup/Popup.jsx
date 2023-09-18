import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { PopupContext } from "../../layout/Navbar";

const Popup = () => {
  const { showPopup, setShowPopup, selectedType, handleClick, handleTypeChange } = useContext(PopupContext);

  const handlePopupClose = () => {
    setShowPopup(false);
    window.location.reload();
  };

  const renderPopupContent = () => {
    if (selectedType === 'Carton') {
      return (
        <>
          <div className="firstForm">
            <label htmlFor="type">Quantity Type</label><br />
            <select value={selectedType} onChange={handleTypeChange} id="type">
              <option value={selectedType}>{selectedType}</option>  
              <option value="Packs">Packs</option>
              <option value="Cards">Cards</option>
              <option value="Tablets">Tablets</option>
            </select>
            <label htmlFor="carton">Quantity of cartons</label><br />
            <input type="number" id='carton' /><br />
            <label htmlFor="perpieces">Num. of Cards per pack</label><br />
            <input type="number" id='percarton' /><br />
            <label htmlFor="weight">Net weight (gm/ml)s</label><br />
            <input type="text" id='weight' /><br />
            <label htmlFor="date">Expiry Date</label><br />
            <input type="month" id="date" />
          </div>
          <div className="secondForm">
            <label htmlFor="reminder">Set Timer (Reminder)</label><br />
            <input type="text" id='reminder' /><br />
            {/* <select id="reminder">
              <option value="">Remind on Tue</option>
            </select> */}
            <label htmlFor="percarton">Num. of packs per carton</label><br />
            <input type="number" id='percarton' /><br />
            <label htmlFor="pertablets">Num. of tablets per card</label><br />
            <input type="number" id='pertablets' /><br />
            <label htmlFor="total">Total Tablets</label><br />
            <input disabled type="number" id="total" />
            <label htmlFor="price">Price NGN</label><br />
            <input type="number" id="price" />
          </div>
        </>
      );
    } else if (selectedType === 'Packs') {
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
    } else if (selectedType === 'Cards') {
      return (
        <>
          <div className="firstForm">
            <label htmlFor="type">Quantity Type</label><br />
            <select value={selectedType} onChange={handleTypeChange} id="type">
              <option value={selectedType}>{selectedType}</option>
              <option value="Carton">Carton</option>
              <option value="Packs">Packs</option>
              <option value="Tablets">Tablets</option>
            </select>
            <label htmlFor="piece">Quantity of cards</label><br />
            <input type="number" id='piece' /><br />
            <label htmlFor="total">Total Tablets</label><br />
            <input disabled type="number" id="total" />
            <label htmlFor="date">Expiry Date</label><br />
            <input type="month" id="date" />
          </div>
          <div className="secondForm">
            <label htmlFor="reminder">Set Timer (Reminder)</label><br />
            <input type="text" id='reminder' /><br />
            {/* <select id="reminder">
              <option value="">Remind on Tue</option>
            </select> */}
            <label htmlFor="pertablets">Num. of tablets per card</label><br />
            <input type="number" id='pertablets' /><br />
            <label htmlFor="weight">Net weight (gm/ml)s</label><br />
            <input type="text" id='weight' /><br />
            <label htmlFor="price">Price NGN</label><br />
            <input type="number" id="price" />
          </div>
        </>
      );
    } else if (selectedType === 'Tablets') {
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
    } else {
      return null;
    }
  }

  return ( 
    <>
      <button onClick={handleClick}>Add new</button>
      { showPopup && (
        <div className="popupForm">
        <form>
          <div className="popupFormHeader">
            <div className="wrapper">
              <h2>Human Medicine</h2>
              <GrClose onClick={handlePopupClose} size={30} className='closeIcon'/>
            </div>
          </div>
          <div className="formField wrapper">
            <input type="text" placeholder='Name' />
            <div className="twoForms">
                {selectedType ? (
                  <>
                    {renderPopupContent()}
                  </>
                ) : (
                  <div className="firstForm">
                    <label htmlFor="type">Quantity Type</label><br />
                    <select value={selectedType} onChange={handleTypeChange} id="type">
                      <option>Select Type</option>
                      <option value="Carton">Carton</option>
                      <option value="Packs">Packs</option>
                      <option value="Cards">Cards</option>
                      <option value="Tablets">Tablets</option>
                    </select>
                  </div>
                )}
            </div>
            <button>Done</button>
          </div>
        </form>
      </div>
      ) 
      }
    </>
  );
}
 
export default Popup;