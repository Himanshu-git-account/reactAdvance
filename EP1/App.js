import React, { Suspense, lazy, useState } from 'react'
import ReactDOM from 'react-dom/client';
import Header from './src/Header';
import {Body} from './src/Body';
import Footer from './src/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
// import AboutUs from './src/AboutUs';
import Contact from './src/Contact';
import ErrorPage from './src/ErrorPage';
import RestaurantMenu from './src/RestaurantMenu';
import UserContext from './src/utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './src/redux/appStore';
import CartComponent from './src/CartComponent';

const AboutUs = lazy(()=>import('./src/AboutUs'));


const AppLayout = () => {
    const [loggedUser,setLoggedUser] = useState("Default");
    return (
      <Provider store={appStore}>

     
        <div className="appContainer">
                 <UserContext.Provider value={{loggedInUser:loggedUser,setLoggedUser}}>
            <Header />
       
            <Outlet />
            </UserContext.Provider>
            {/* <Footer /> */}
        </div>
        </Provider>
    )
}


const router = createBrowserRouter([
    {
       
        path:'/',
        element: <AppLayout />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {

                path:'/about',
                element: <Suspense fallback={<h1>Loading...</h1>}><AboutUs /></Suspense>
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/restaurant/:id',
                element:<RestaurantMenu />

            },
            {
                path:'/cart',
                element:<CartComponent />

            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>)