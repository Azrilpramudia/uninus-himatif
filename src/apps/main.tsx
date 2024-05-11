import {
    createBrowserRouter,
  } from "react-router-dom";
import { LandingPage } from "./home/default";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
    },
  ]);