import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyDateTimeData, dummyShowsData } from "../assets/assets";
import { useEffect } from "react";
import Loading from "../Animations/Loading";
import {  ArrowRightIcon, Clock10Icon, ClockIcon } from "lucide-react";
import ISOTimeFormat from "../library/ISOTimeFormat";
import BlurCircleMovies from "../components/BlurCircleofMovies";
import toast from "react-hot-toast";

const SeatLayout = () => {
  const { id, date } = useParams();
  const groupRows = [
    ["A", "B"],
    ["C", "D"],
    ["E", "F"],
    ["G", "H"],
    ["I", "J"],
  ];
  const [selectedSeat, setselectedSeat] = useState([]);
  const [selectedTime, setselectedTime] = useState(null);
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  const getShow = async () => {
    const show = dummyShowsData.find((show) => show._id === id);
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData,
      });
    }
  };
  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast("please select time first");
    }

    if (selectedSeat.includes(seatId)) {
      // Deselect the seat
      setselectedSeat((prev) => prev.filter((seat) => seat !== seatId));
    } else {
      // Select the seat (max 5)
      if (selectedSeat.length >= 5) {
        return toast("You can only select 5 Seats");
      }
      setselectedSeat((prev) => [...prev, seatId]);
    }
  };

  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex gap-2 mt-2">
      <div className="flex flex-wrap items-center justify-center gap-2"></div>
      {Array.from({ length: count }, (_, i) => {
        const seatId = `${row}${i + 1}`;
        return (
          <button
            key={seatId}
            onClick={() => handleSeatClick(seatId)}
            className={`h-8 w-8 rounded border border-primary cursor-pointer ${
              selectedSeat.includes(seatId) && "bg-primary text-white"
            }`}
          >
            {seatId}
          </button>
        );
      })}
    </div>
  );
  useEffect(() => {
    getShow();
  }, []);
  return show ? (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">
      {/* {available timing} */}
      <div className="w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30">
        <p className="text-lg font-bold px-6">Available Timing</p>
        <div className="mt-5 space-y-0.5">
          {show.dateTime[date].map((item, index) => (
            <div
              key={index}
              onClick={() => setselectedTime(item)}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${
                selectedTime?.time === item.time
                  ? "bg-primary text-white"
                  : "hover:bg-primary"
              }`}
            >
              <ClockIcon className="h-4 w-4" />
              <p className="text-sm">{ISOTimeFormat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex flex-col items-center max-md:mt-16">
        <BlurCircleMovies top="-100px" left="-100px" />
        <BlurCircleMovies bottom="0px" right="0px" />
        <h1 className="text-2xl font-bold mb-4"> Select Your Seat</h1>
        <img src={assets.screenImage} alt="" />
        <p className="text-gray-400 text-lg mb-6">Screen Side</p>
        <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-2">
            {groupRows[0].map((row) => renderSeats(row))}
          </div>
          <div className="grid grid-cols-2 gap-11 mt-6">
            {groupRows.slice(1).map((group, idx) => (
              <div key={idx}>{group.map((row) => renderSeats(row))}</div>
            ))}
          </div>
        </div>
        <button onClick={()=>navigate('/my-bookings')} className="flex flex-col items-center justify-center mt-10 p-2 rounded-full bg-primary hover:bg-primary-dull hover:scale-110">Proceed To Checkout<ArrowRightIcon strokeWidth={3} className="h-4 w-4" /></button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default SeatLayout;
