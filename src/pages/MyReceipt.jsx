import { useRef } from "react";
import { useState } from "react"
import ReactToPrint from "react-to-print";

const MyDocument = () => {
  const [shopName, setShopName] = useState('NVIR Vom');
  const [address, setAddress] = useState('No 12, Kuru road, Vom');
  const [phone, setSPhone] = useState('08082504438');
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  const componentRef = useRef();

  return (
   <div ref={componentRef} className="recieptView" style={{display: 'flex', flexDirection: 'column'}}>
    <header>
      <h1>{shopName}</h1>
      <p>Address: {address}</p>
      <p>Tel: {phone}</p>
      <p>Date: {date}</p>
    </header>
    <h2>RECEIPT</h2>
    <section>
      <div className="topTable">
        <table style={{width: '100%'}}>
          <tbody>
            <tr>
              <th>DESCRIPTION</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
            </tr>
            <tr>
              <td>Nice Syrup</td>
              <td>2</td>
              <td>₦ 1000</td>
            </tr>
            <tr>
              <td>Nise Syrup</td>
              <td>2</td>
              <td>₦ 1000</td>
            </tr>
            <div className="tableFooter">
              <tr>
                <td>TOTAL</td>
                <td>₦ 2000</td>
              </tr>
            </div>
          </tbody>
        </table>
      </div>
    </section>
    <h3>THANK YOU!</h3>
    <ReactToPrint 
      trigger={() => <button style={{backgroundColor: '#003366', color: 'white', border: 'none', padding: '.5rem 1rem', borderRadius: '5px', marginBlockStart: '.8rem'}}>Print me</button>}
      content={() => componentRef.current}
    />
   </div>
  )
}

export default MyDocument