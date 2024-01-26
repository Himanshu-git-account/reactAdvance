//1. create your store 
//appStore.js

import appStore from "./appStore"

// import {configureStore} from '@reduxjs/toolkit'

// const appStore = configureStore({})

// export default appStore;

// 2. Create a provoder in appStore.js

// import { Provider } from 'react-redux';
// // import appStore from './src/redux/appStore';
// <Provider store={appStore}>

   
// <UserContext.Provider
//   value={{ loggedInUser: loggedUser, setLoggedUser }}
// >
//   <Header />
//   <Outlet />
// </UserContext.Provider>
// </Provider>

//3. create your slice
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: "cart",
//     initialState:{
//         items:[]
//     },
//     reducers:{
//         addItem : (state,action)=>{
//             state.items.push(action.payload)
//         },
//         removeItem: (state,action)=>{
//             state.items.pop();
//         },
//         clearItem:(state) =>{
//             state.items.length = 0;
//         }
//     }
// })

//make sure actions and reducer spelling are correct
// export const {addItem,removeItem,clearItem} = cartSlice.actions
// export default cartSlice.reducer;

// 4.  Add Reducer to appStore
// import {configureStore} from '@reduxjs/toolkit'
// import cartReducer from './cartSlice'

// const appStore = configureStore({
//     reducer:{
//         cart:cartReducer
//     }
// })

// export default appStore;

// 5. Subscribe to Store
// const cartItems = useSelector((store)=>store.cart.items);

//6. Dispatch an event 

// const dispatch = useDispatch(cartSlice);

  
// const handleCartAddition = (item) =>{
//   dispatch(addItem(item.card.info.name))
// }
