import React from "react";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "../components/MovieCard";
import BlurCircleofMovies from "../components/BlurCircleofMovies";

const Movies = () => {
  return dummyShowsData.length ? (
    <div className="relative my-40 mb-60 px-6 md:px-1 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      <BlurCircleofMovies top="150px" left="0px" />
      <BlurCircleofMovies bottom="50px" right="50px" />
      <h1 className="text-lg font-medium mb-3 my-4">Now Showing </h1>
      <div className="flex flex-wrap max-sm:justify-center gap-8">
        {dummyShowsData.map((data) => (
          <MovieCard key={data._id} movie={data} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">No Movies Available</h1>
    </div>
  );
};

export default Movies;
