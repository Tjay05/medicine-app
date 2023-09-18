import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { PopupContext } from "../../layout/Navbar";
import Cards from "./PopupFields/Cards";
import Carton from "./PopupFields/Carton";
import Packs from "./PopupFields/Packs";
import Tablets from "./PopupFields/Tablets";

const Popup = () => {
  const { showPopup, setShowPopup, selectedType, handleClick, handleTypeChange } = useContext(PopupContext);

  const handlePopupClose = () => {
    setShowPopup(false);
    window.location.reload();
  };

  const renderPopupContent = () => {
    if (selectedType === 'Carton') {
      return (
        <Carton/>
      );
    } else if (selectedType === 'Packs') {
      return (
        <Packs/>
      );
    } else if (selectedType === 'Cards') {
      return (
        <Cards/>
      );
    } else if (selectedType === 'Tablets') {
      return (
        <Tablets/>
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