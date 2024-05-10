import {
    createBrowserRouter,
  } from "react-router-dom";
import { Homepage } from "./home/modules/homepage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    },
  ]);