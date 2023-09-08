const ItemsSold = () => {
  return ( 
    <>
      <div className="availableStock">
        <div className="stockHead">
          <p>Name</p>
          <p>Quantity type</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Salesperson</p>
        </div>
        <div className="stockDetails">
          <p>Nise Plus Syrup</p>
          <p>Pieces</p>
          <p>10</p>
          <p>#2000</p>
          <p>McGinn</p>
        </div>
        <div className="stockDetails">
          <p>Weed</p>
          <p>Pieces</p>
          <p>10</p>
          <p>#2000</p>
          <p>Jax</p>
        </div>
      </div>
    </>
  );
}
 
export default ItemsSold;