import { useState } from "react";

import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Clients, { loaderFunction } from "./components/Clients";
import Detail from "./pages/Detail";


function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Clients />} loader={loaderFunction} />
        <Route path="customer" element={<Detail />} />
      </Route>
    )
  );

  return (
    <>
      <div className="main">
        <RouterProvider router={routes} fallbackElement={null} />
      </div>
    </>
  );
}

export default App;
