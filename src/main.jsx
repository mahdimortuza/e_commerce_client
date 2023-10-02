import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routs/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <div className="bg-[#282828]"> */}
    <RouterProvider router={router} />
    {/* </div> */}
  </React.StrictMode>
);
