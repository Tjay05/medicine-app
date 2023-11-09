import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { GrEdit } from "react-icons/gr";
import { ClipLoader } from "react-spinners";
import { HumanWrapContext } from "./HumanWrap";

const AvailStock = () => {
  const { isLoading, filteredData } = useContext(HumanWrapContext);

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
        {isLoading ? (
          <div className="loaded">
            <ClipLoader
              color="#007bff"
              className="loadImg"
              loading={isLoading}
              size={60}
            />
          </div>
        ) : (
          <>
            {filteredData.length > 0 ? (
              filteredData.map((drug) => (
                <div className="stockDetails" key={drug._id}>
                  <p>{drug.name}</p>
                  <p>{drug.quantity_type}</p>
                  <p>
                    {drug.quantity_type === "carton"
                      ? drug.carton
                      : drug.quantity_type === "pack"
                      ? drug.pack
                      : drug.quantity_type === "card"
                      ? drug.card
                      : drug.tablet}
                  </p>
                  <p>₦ {drug.price}</p>
                  <div className="date">
                    <p>{drug.expiryDate}</p>
                    <GrEdit />
                  </div>
                </div>
              ))
            ) : (
              <p className="notFound">Drug not available!!!</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default AvailStock;
