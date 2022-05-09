import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useFetchUser from "../hooks/UserHooks";
import HouseAdd from "../house/HouseAdd";
import HouseDetail from "../house/HouseDetail";
import HouseEdit from "../house/HouseEdit";
import HouseList from "../house/HouseList";
import "./App.css";
import Header from "./Header";

function App() {
  const { isSuccess } = useFetchUser();
  return (
    <BrowserRouter>
      <div className="container">
        {!isSuccess && <a href="/account/login">Login</a>}
        <Header subtitle="Providing houses all over the world" />
        <Routes>
          <Route path="/" element={<HouseList />}></Route>
          <Route path="/house/:id" element={<HouseDetail />}></Route>
          <Route path="/house/add" element={<HouseAdd />}></Route>
          <Route path="/house/edit/:id" element={<HouseEdit />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
