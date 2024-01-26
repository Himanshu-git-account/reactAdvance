import { useDispatch, useSelector } from "react-redux"
import { clearCart, removeItem } from "./redux/cartSlice";

const CartComponent = () =>{
    const cartItems = useSelector(state=>state.cart.items)
    const dispatch = useDispatch();
    const IMAGE_CDN =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

    const hadleCartDeletion = (item) =>{
        console.log(item?.card?.info?.id)
        dispatch(removeItem(item?.card?.info?.id))
    }

    return (
        <div className="bg-red-700 w-2/4 mx-auto my-4 p-4"> 
        
        <div className="text-center text-slate-200 text-xl">Cart - {cartItems.length} 
        <span className="float-right bg-slate-200 text-red-700 px-4 py-1 rounded-md" onClick={()=>dispatch(clearCart())}><button>Clear Cart</button></span>
        </div> 
        {cartItems.map((item) => {
            return (
              <div key={item?.card?.info?.id} className="mb-1 border-b-[3px] bg-slate-100 border-red-800 m-3 flex ">
                 <div className="w-3/12 ">
                 
                 <img
                 className="rounded-md"
                  
                   alt="menuImage"
                   src={`${IMAGE_CDN + item?.card?.info?.imageId}`}
                 />
                 
            
               </div>
                <div className="w-9/12">
                <button onClick={()=>hadleCartDeletion(item)} className="bg-black text-white float-right rounded-full px-1 m-2">X</button>
                  <div>{item?.card?.info?.isVeg ?" 💚 ":" ❤️ "}</div>
                  <h2 className="font-medium">{item?.card?.info?.name}</h2>
                  <div className="float-right m-2">₹{item?.card?.info?.price ? item?.card?.info?.price/100:item?.card?.info?.defaultPrice/100}</div>
          
                </div>
               
              </div>
            );
          })}
        {cartItems.length!==0 ?<div className="text-slate-200 border-t-4 p-4">SubTotal (inclusive TAX)
        <span className="float-right">₹ {cartItems.reduce((acc,item)=>{
            let itemPrice = 0
            if(item?.card?.info?.price){
                itemPrice= parseFloat(item?.card?.info?.price/100)
            }else{
                itemPrice = parseFloat(item?.card?.info?.defaultPrice/100)
            }
            return acc= acc+ itemPrice


        },0)} </span>
        </div>:<div className="text-slate-200  p-4 text-center">Cart is empty. Please Add some item in the Cart...</div>}
        </div>
    )
}

export default CartComponent