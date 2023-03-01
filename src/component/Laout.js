import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { fromOptions, noOfGust, ticketClass } from "../data/options";
import { submit } from "../redux/flight-booking/action";
import Button from "./Button";
import SelectBox from "./SelectBox";
import TableBody from "./TableBody";

const Laout = () => {
  const bokingData = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const [option, setOption] = useState({
    from: "",
    to: "",
    date: "",
    guests: "",
    ticketClass: "",
    id: uuid(),
  });
  let name, value;

  const onChangeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setOption({ ...option, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(submit(option));
    setOption({
      from: "",
      to: "",
      date: "",
      guests: "",
      ticketClass: "",
      id: uuid(),
    });
  };

  return (
    <section>
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form className="first-hero lws-inputform">
            <SelectBox
              lebel="Destination From"
              image="./img/icons/Frame.svg"
              name="from"
              id="lws-from"
              value={option.from}
              onChange={onChangeHandler}
            >
              {fromOptions.map((elm, i) => {
                return (
                  <option key={i} value={elm.districtName}>
                    {elm.value}
                  </option>
                );
              })}
            </SelectBox>

            <SelectBox
              lebel="Destination To"
              image="./img/icons/Frame.svg"
              name="to"
              id="lws-to"
              value={option.to}
              onChange={onChangeHandler}
            >
              {fromOptions.map((elm, i) => {
                return (
                  <option key={i} value={elm.districtName}>
                    {elm.value}
                  </option>
                );
              })}
            </SelectBox>

            <div className="des-from">
              <p>Journey Date</p>
              <input
                type="date"
                className="outline-none px-2 py-2 w-full date"
                name="date"
                id="lws-date"
                value={option.date}
                onChange={onChangeHandler}
                required
              />
            </div>

            <SelectBox
              lebel="Guests"
              image="./img/icons/Vector (1).svg"
              name="guests"
              id="lws-guests"
              value={option.guests}
              onChange={onChangeHandler}
            >
              {noOfGust.map((elm, i) => {
                return (
                  <option key={i} value={elm.number}>
                    {elm.value}
                  </option>
                );
              })}
            </SelectBox>

            <SelectBox
              lebel="Class"
              image="./img/icons/Vector (3).svg"
              name="ticketClass"
              id="lws-ticketClass"
              value={option.ticketClass}
              onChange={onChangeHandler}
            >
              {ticketClass.map((elm, i) => {
                return (
                  <option key={i} value={elm.number}>
                    {elm.value}
                  </option>
                );
              })}
            </SelectBox>
            <Button
              lebel="Book"
              className="addCity"
              id="lws-addCity"
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              d="M12 4.5v15m7.5-7.5h-15"
              onClick={submitHandler}
              disable={bokingData && bokingData.length > 2 ? true : null}
            />
          </form>
        </div>
      </div>

      <div className="table-container">
        <table className="booking-table">
          <thead className="bg-gray-100/50">
            <tr className="text-black text-left">
              <th>Destination From</th>
              <th>Destination To</th>
              <th className="text-center">Journey Date</th>
              <th className="text-center">Guests</th>
              <th className="text-center">Class</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          {bokingData &&
            bokingData.map((item, i) => {
              return <TableBody key={i} item={item} id={item.id} />;
            })}
        </table>
      </div>
    </section>
  );
};

export default Laout;
