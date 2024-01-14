import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './src/Header';
import {Body} from './src/Body';
import Footer from './src/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutUs from './src/AboutUs';
import Contact from './src/Contact';
import ErrorPage from './src/ErrorPage';
import RestaurantMenu from './src/RestaurantMenu';


const AppLayout = () => {
    return (
        <div className="appContainer">
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
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
                element: <AboutUs />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/restaurant/:id',
                element:<RestaurantMenu />

            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>)