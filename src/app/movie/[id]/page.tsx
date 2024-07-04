import Card from "@/components/Card";
import React from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

const MoviePage = async ({
  params,
}: {
  params: {
    id: number;
  };
}) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  return (
    <>
      <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            alt=""
            height={600}
            width={500}
            className="sm:rounded-lg object-cover w-[100%]"
          />
          <div className="p-2">
            <h2 className="text-lg mb-2 font-bold ">
              {movie.original_name || movie.name}
            </h2>
            <p className="text-lg mb-3">{movie.overview}</p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Date Released :</span>
              {movie.first_air_date || movie.release_date}
            </p>
            <p>
              <span className="font-semibold mr-1">Rating</span>{" "}
              {movie.vote_count}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
