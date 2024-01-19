import React, { useState } from "react";

const Accordian = ({ heading, body }) => {
  const [isOpen, setIsOpen] = useState(false);
  const IMAGE_CDN =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
  return (
    <div className="mt-3 bg-slate-200">
      <div className="p-3 bg-red-600 text-slate-50 rounded-md cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span>{heading} ({body && body.length}) </span>
        <span className="float-right">{!isOpen?"⬇️":"🔼 "}</span>
        
      </div>
      {isOpen && (
        <div className="p-3">
          {body.map((item) => {
            return (
              <div key={item?.card?.info?.id} className="mb-1 border-b-[3px] border-red-800 m-3 flex ">
                <div className="w-9/12">
                  <div>{item?.card?.info?.isVeg ?" 💚 ":" ❤️ "}</div>
                  <h2 className="font-medium">{item?.card?.info?.name}</h2>
                  <div>₹{item?.card?.info?.price ? item?.card?.info?.price/100:item?.card?.info?.defaultPrice/100}</div>
                  <div className="text-gray-500 text-sm">{item?.card?.info?.description}</div>
                </div>
                <div className="w-3/12 ">
                 
                  <img
                  className="rounded-md"
                   
                    alt="menuImage"
                    src={`${IMAGE_CDN + item?.card?.info?.imageId}`}
                  />
                   <button className="bg-white text-red-500  w-full">Add +</button>
             
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
