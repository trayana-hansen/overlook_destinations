import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Reservation from "../Pages/Reservation/Reservation";
import Rooms from "../Pages/Rooms/Rooms";
import Country from "../Pages/Destinations/Country/Country";
import NotFound from "../Pages/404/NotFound";

const AppRouter = () => {
  <Routes>
    <Route index element={<Home />} />
    <Route path="/destinationer" element={<Country />} />
    <Route path="/værelser" element={<Rooms />} />
    <Route path="/login" element={<Login />} />
    <Route path="/reservation" element={<Reservation />} />
    <Route path="*" element={<NotFound />} />
  </Routes>;
};

export default AppRouter;
