import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Reservation from "../Pages/Reservation/Reservation";
import Rooms from "../Pages/Rooms/Rooms";
import Destinations from "../Pages/Destinations/Destinations";
import Country from "../Pages/Destinations/Country/Country";
import NotFound from "../Pages/NotFound/NotFound";

/* Creating a react component */
const AppRouter = () => {
  return (
    <Routes>
      {/* Defining the home page of the website */}
      <Route index element={<Home />} />

        {/* Route to destinations page */}
      <Route path="/destinationer">
          {/* Nested routing */}
        <Route index element={<Destinations />} />
        <Route path=":id" element={<Country />} />
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
