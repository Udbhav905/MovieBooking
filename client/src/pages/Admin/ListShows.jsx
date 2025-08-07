import React, { useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import { useEffect } from "react";
import Loading from "../../Animations/Loading";
import Title from "../../components/Admin/Title";

const ListShows = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllshows();
  }, []);
  const getAllshows = async () => {
    try {
      setShows([
        {
          movie: dummyShowsData[0],
          showDateTime: "2025-06-30T02:30:00.000Z",
          showPrice: 59,
          occupidseats: {
            A1: "user_1",
            B1: "user_2",
            C1: "user_3",
          },
        },
      ]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return !loading ? (
    <>
      <Title text1="List" text2="Shows" />
      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse  rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white"></tr>
          </thead>
        </table>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default ListShows;
