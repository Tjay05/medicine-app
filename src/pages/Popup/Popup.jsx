import { useState } from "react";
import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import { PopupContext } from "../../layout/Navbar";

// Field Imports
import Cards from "./PopupFields/Cards";
import Carton from "./PopupFields/Carton";
import Packs from "./PopupFields/Packs";
import Tablets from "./PopupFields/Tablets";

const Popup = () => {
  const tosinToken = localStorage.getItem('user');
  const token = JSON.parse(tosinToken);

  const { showPopup, setShowPopup, handleClick, handleTypeChange, quantity_type, setQuantity_type } = useContext(PopupContext);

  // ALL FIELDS
  const [name, setName] = useState('');
  const [Reminder, setReminder] = useState('');
  const [carton, setCarton] = useState();
  const [pack, setPack] = useState();
  const [card, setCard] = useState();
  const [tablet, setTablet] = useState();
  const [Total_pieces, setTotal_pieces] = useState();
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState();
  const [expiryDate, setExpiryDate] = useState('');
  
  const location = useLocation();
  const path = location.pathname.includes('/Animal-Medicine')

  const handlePopupClose = () => {
    setShowPopup(false);
    window.location.reload();
  };

  const renderPopupContent = () => {
    if (quantity_type === 'carton') {
      return (
        <Carton name={name} setName={setName} Reminder={Reminder} setReminder={setReminder} carton={carton} setCarton={setCarton} pack={pack} setPack={setPack} card={card} setCard={setCard} tablet={tablet} setTablet={setTablet} Total_pieces={Total_pieces} setTotal_pieces={setTotal_pieces} weight={weight} setWeight={setWeight} price={price} setPrice={setPrice} expiryDate={expiryDate} setExpiryDate={setExpiryDate} />
      );
    } else if (quantity_type === 'pack') {
      return (
        <Packs name={name} setName={setName} Reminder={Reminder} setReminder={setReminder} pack={pack} setPack={setPack} card={card} setCard={setCard} tablet={tablet} setTablet={setTablet} Total_pieces={Total_pieces} setTotal_pieces={setTotal_pieces} weight={weight} setWeight={setWeight} price={price} setPrice={setPrice} expiryDate={expiryDate} setExpiryDate={setExpiryDate} />
      );
    } else if (quantity_type === 'card') {
      return (
        <Cards name={name} setName={setName} Reminder={Reminder} setReminder={setReminder} card={card} setCard={setCard} tablet={tablet} setTablet={setTablet} Total_pieces={Total_pieces} setTotal_pieces={setTotal_pieces} weight={weight} setWeight={setWeight} price={price} setPrice={setPrice} expiryDate={expiryDate} setExpiryDate={setExpiryDate} />
      );
    } else if (quantity_type === 'tablet') {
      return (
        <Tablets name={name} setName={setName} Reminder={Reminder} setReminder={setReminder} tablet={tablet} setTablet={setTablet} Total_pieces={Total_pieces} setTotal_pieces={setTotal_pieces} weight={weight} setWeight={setWeight} price={price} setPrice={setPrice} expiryDate={expiryDate} setExpiryDate={setExpiryDate} />
      );
    } else {
      return null;
    }
  }

  const handleStockAdd = async (e) => {
    e.preventDefault();
    console.log( tablet);
    try {
      const response = await fetch('https://nvmri.onrender.com/user/add/drug', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.token}`,
        },
        body: JSON.stringify({
          name,
          quantity_type,
          carton,
          Reminder,
          pack: quantity_type === 'pack' ? pack : carton*pack,
          card: quantity_type === 'card' ? card : quantity_type === 'pack' ? pack*card : carton*pack*card,
          tablet: quantity_type === 'tablet' ? tablet : quantity_type === 'card' ? card*tablet : quantity_type === 'pack' ? pack*card*tablet : carton*pack*card*tablet,
          Total_pieces: quantity_type === 'tablet' ? tablet : quantity_type === 'card' ? card*tablet : quantity_type === 'pack' ? pack*card*tablet : carton*pack*card*tablet,
          weight,
          price,
          expiryDate
        }),
      });
      const data = await response.json()
      if (response.ok) {
        window.location.reload();
      } else if (response.status === 401) {
        console.log(data);
      } else if (response.status === 404) {
        console.log(data);
      }else{
        console.log(data, 'could not add stock');
      }
    }
    catch (error) {
      console.log('Topins error', error);
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
            {!path &&(<h2>Human Medicine</h2>)}
            {path &&(<h2>Animal Medicine</h2>)}
              <GrClose onClick={handlePopupClose} size={30} className='closeIcon'/>
            </div>
          </div>
          <div className="formField wrapper">
            <input 
              type="text" placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="twoForms">
                {quantity_type ? (
                  <>
                    {renderPopupContent()}
                  </>
                ) : (
                  <div className="firstForm">
                    <label htmlFor="type">Quantity Type</label><br />
                    <select value={quantity_type} onChange={handleTypeChange} id="type">
                      <option>Select Type</option>
                      <option value="carton">Carton</option>
                      <option value="pack">Packs</option>
                      <option value="card">Cards</option>
                      <option value="tablet">Tablets</option>
                    </select>
                  </div>
                )}
            </div>
            <button onClick={handleStockAdd} >Done</button>
          </div>
        </form>
      </div>
      ) 
      }
    </>
  );
}
 
export default Popup;