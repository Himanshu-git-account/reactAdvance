import React, { useState } from "react";

const Accordian = ({ heading, body }) => {
  const [isOpen, setIsOpen] = useState(false);
  const IMAGE_CDN =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
  return (
    <div className="accordianContainer">
      <div className="accHeading" onClick={() => setIsOpen(!isOpen)}>
        {heading}
      </div>
      {isOpen && (
        <div className="accBody">
          {body.map((item) => {
            return (
              <div key={item?.card?.info?.id} className="menuCard">
                <div className="menuCardDetails">
                  <h2>{item?.card?.info?.name}</h2>
                  <div>₹{item?.card?.info?.price / 100}</div>
                  <div>{item?.card?.info?.description}</div>
                </div>
                <div className="menuCardImage">
                  <img
                
                    width={"100px"}
                    alt="menuImage"
                    src={`${IMAGE_CDN + item?.card?.info?.imageId}`}
                  />
             
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accordian;
