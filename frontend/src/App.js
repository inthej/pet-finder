import React from 'react'
import './App.css'
import Search from "./pages/Search"
import Map from "./pages/Map"
import Find from "./pages/Find"
import Care from "./pages/Care"
import Support from "./pages/Support"
import Tag from "./pages/Tag"
import {Route, Routes} from "react-router-dom";
import RouteWithLayout from "./layouts/RouteWithLayout";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RouteWithLayout layout={MainLayout} component={Search}/>}/>
      <Route path="/map" element={<RouteWithLayout layout={MainLayout} component={Map}/>}/>
      <Route path="/find" element={<RouteWithLayout layout={MainLayout} component={Find}/>}/>
      <Route path="/care" element={<RouteWithLayout layout={MainLayout} component={Care}/>}/>
      <Route path="/support" element={<RouteWithLayout layout={MainLayout} component={Support}/>}/>
      <Route path="/tag" element={<RouteWithLayout layout={MainLayout} component={Tag}/>}/>
    </Routes>
  );
}

export default App;
