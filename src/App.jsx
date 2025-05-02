//import React from "react";
//import ReactDOM from "react-dom/client";
//import { Link } from "react-router-dom";
import "../src/server";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans/Vans";
import VanDetail from "./Pages/Vans/VanDetail";
import Layout from "./Components/Layout";
import HostLayout from "./Components/HostLayout";
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import HostVan from "./Pages/Host/HostVan";
import HostVanDetails from "./Pages/Host/HostVanDetails";
// import HostVanInfo from "./Pages/Host/HostVanInfo";
// import HostVanPhoto from "./Pages/Host/HostVanPhoto";
// import HostVanPricing from "./Pages/Host/HostVanPricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="Reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVan />} />
            <Route path="vans/:id" element={<HostVanDetails />}>
              {/* <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhoto />} />*/}
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
