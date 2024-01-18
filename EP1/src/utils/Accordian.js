import React, { useState } from "react";

const Accordian = ({ heading, body }) => {
  const [isOpen, setIsOpen] = useState(false);
  const IMAGE_CDN =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
  return (
    <div className="mt-3 bg-slate-200">
      <div className="p-3 bg-red-600 text-slate-50" onClick={() => setIsOpen(!isOpen)}>
        {heading}
      </div>
      {isOpen && (
        <div className="p-3">
          {body.map((item) => {
            return (
              <div key={item?.card?.info?.id} className="mb-1 border-b-[3px] border-red-800 m-3 flex ">
                <div className="w-9/12">
                  <h2 className="font-medium">{item?.card?.info?.name}</h2>
                  <div>₹{item?.card?.info?.price / 100}</div>
                  <div>{item?.card?.info?.description}</div>
                </div>
                <div className="w-3/12">
                  <img
                  className=""
                   
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
