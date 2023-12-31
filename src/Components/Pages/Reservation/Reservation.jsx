import React from "react";
import "./Reservation.scss";

const Reservation = () => {
  return (
    <>
      {/* Page Title */}
      <h1>Reservation</h1>
      <div className="reservationForm">
        <form>
          <p>
            {/* Reservation Form Introduction */}
            Udfyld nedenstående formular for at reservere et af vores værelser.
          </p>
          {/* Hotel selection dropdown */}
          <select name="hotel" id="hotel" required>
            <option value="hotel">Vælg destination & hotel</option>
            <option value="optionOne">Option 1</option>
            <option value="optionTwo">Option 2</option>
            <option value="optionThree">Option 3</option>
          </select>
          <div className="flexSelect">
            {/*/ Room Type and Number of People Selection */}
            <select name="room" id="room" required>
              <option value="room">Vaælg værelsestype</option>
              <option value="roomOne">Room type 1</option>
              <option value="roomTwo">Room type 2</option>
              <option value="roomThree">Room type 3</option>
            </select>
            <select name="people" id="people" required>
              <option value="people">Vælg antal personer</option>
              <option value="onePerson">1 person</option>
              <option value="twoPeople">2 personer</option>
              <option value="threePeople">3 personer</option>
            </select>
          </div>
          <h3>Vælg prisklasse</h3>
          {/*/ Price Class Selection */}
          <label htmlFor="price">
            <input type="radio" name="price" value="Normal" /> Normal
          </label>{" "}
          <br />
          <label htmlFor="price">
            <input type="radio" name="price" value="flex" /> Flex
          </label>
          <div className="datePicker">
            {/* Date Picker */}
            <input type="date" name="startDate" />
            <input type="date" name="endDate" />
          </div>
          <div className="personalForm">
            {/* Personal Information */}
            <input type="text" placeholder="Fornavn" required />
            <input type="text" placeholder="Efternavn(e)" required />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Telefon" />
            <textarea
              name="comments"
              id="comments"
              cols="30"
              rows="10"
              placeholder="Kommentarer"
            ></textarea>
          </div>
          {/* Acceptance of Terms and Conditions */}
          <label htmlFor="conditions">
            Jeg accepterer hermed Overlooks betingelser (sæt kryds){" "}
            <input type="checkbox" required />
          </label>
          <div className="formButtons">
            {/* Form Submission and Reset Buttons */}
            <button type="submit">Send reservation</button>
            <button type="reset">Annuller</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Reservation;
