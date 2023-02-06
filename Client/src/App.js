import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Students from "./pages/Students/Students";
import RootLayout from "./RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="students" element={<Students />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
