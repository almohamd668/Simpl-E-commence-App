import React from "react";
import ReactDOM from "react-dom/client";
import {rout} from "./Router";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "../node_modules/react-router-dom/dist/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={rout}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
