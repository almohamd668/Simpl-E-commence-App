import React from 'react'
import { createBrowserRouter } from "../node_modules/react-router-dom/dist/index";
import App from './App';
import ProductInfo from './Components/ProductInfo';
import ProductsList from './Components/ProductsList';
import Notfound from './Notfound';


export const rout = createBrowserRouter([
 {
  path:"/",
  element:<App/>,
  children: [
    {
      path:"",
      element: <ProductsList/>
     },
     {
      path:"product-info/:productId",
      element: <ProductInfo/>
     },
     {
      path:"about",
      element: <div>About</div>
     },
     {
      path:"contact",
      element: <div>Contact</div>
     },
  ],
 },
 {
  path:"*",
  element: <Notfound/>
 }
])



