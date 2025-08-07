import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
import BlurCircleofMovies from "../components/BlurCircleofMovies";
import { Heart, PlayCircleIcon, StarIcon } from "lucide-react";
import { TimeFormat } from "../library/TimeFormat";
import DateSelect from "../components/DateSelect";
import MovieCard from '../components/MovieCard.jsx'
import Loading from "../Animations/Loading.jsx";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShows] = useState(null);
  const navigate = useNavigate();
  const getShow = async () => {
    const show = dummyShowsData.find((show) => show._id == id);
    if(show){
    setShows({
      movie: show,
      dateTime: dummyDateTimeData,
    });
  }
  };
  useEffect(() => {
    getShow();
  }, [id]);
  return show ? (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl">
        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className="max-md:mx-auto rounded-xl h-104 max-w-70 object-cover hover:scale-105 hover:brightness-120 transition "
        />
        <div className="relative flex flex-col gap-3">
          <BlurCircleofMovies top="-100px" left="-100px" />
          <p className="text-primary">English</p>
          <h1 className="text-4xl font-semibold max-w-96 text-balance">
            {show.movie.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-300">
            <StarIcon className="w-5 h-5 text-primary fill-primary" />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>
          <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
            {show.movie.overview}
          </p>
          <p>
            {TimeFormat(show.movie.runtime)} •{" "}
            {show.movie.genres.map((genres) => genres.name).join(" , ")}
            {" • "}
            {show.movie.release_date.split("-")[0]}
          </p>

          <div className="flex items-center flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95">
              <PlayCircleIcon className={`w-5 h-5`} />
              Watch Trailer
            </button>
            <a
              href="#dateSelect"
              className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull tracking-normal transition rounded-md font-medium cursor-pointer active:scale-95"
            >
              Buy Tickets
            </a>
            <button className="p-3 bg-gray-600 rounded-full transition hover:scale-110">
              <Heart className={`w-5 h-5 `} />
            </button>
          </div>
        </div>
      </div>
      <p className="text-lg font-medium mt-20">YourFavorite Cast</p>
      <div className="overflow-x-auto no-scrollbar mt-8 pb-4">
        <div className="flex items-center gap-4 w-max px-4 ">
          {show.movie.casts.slice(0, 12).map((cast, index) => (
            <div key={index}>
              <img src={cast.profile_path} alt=""  className="rounded-full h-20 md:h-20 aspect-square object-cover"/>
              <p className="font-medium text-sm mt-3">{cast.name.slice(0,12)}</p>
            </div>
          ))}
        </div>
      </div>
      <DateSelect dataTime={show.dateTime} id={id} />
      <p className="text-lg font-medium mt-20 mb-8">You may also Like</p>
      <div className="flex flex-wrap max-sm:justify-center gap-8">
      {dummyShowsData.slice(0,8).map((movie,index)=>(<MovieCard  key={index} movie={movie}/>))}
      </div>
      <div className="flex justify-center mt-20">
        <button  onClick={()=>{navigate('/movies');scrollTo(0,0)}}className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer ">Show More</button>
      </div>

    </div>
  ) : (
    <div><Loading /></div>
  );
};

export default MovieDetails;
