import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Reservation from "../Pages/Reservation/Reservation";
import Rooms from "../Pages/Rooms/Rooms";
import Destinations from "../Pages/Destinations/Destinations";
import Country from "../Pages/Destinations/Country/Country";
import NotFound from "../Pages/NotFound/NotFound";
import City from "../Pages/Destinations/City/City";
import Hotel from "../Pages/Destinations/Hotel/Hotel";

/* Creating a react component */
const AppRouter = () => {
  return (
    <Routes>
      {/* Defining the home page of the website */}
      <Route index element={<Home />} />

      {/* Route to destinations page */}
      <Route path="/destinationer" element={<Destinations />}>
        {/* Nested routing */}
        <Route path="" exact element={<Country />} />
        <Route path=":destinationer" element={<Country />} />
        <Route path=":by" element={<City />} />
        <Route path=":by/:hotel" element={<Hotel />} />
      </Route>

      {/* Routes to rooms, reservations and login */}
      <Route path="/vaerelser" element={<Rooms />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/login" element={<Login />} />

      {/* Routing to a 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
/* Exporting the component to be reused*/
export default AppRouter;
