import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";
import { FiThumbsUp } from "react-icons/fi";

export interface CardI {
  backdrop_path: String;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: [];
  popularity: number;
  first_air_date: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: [];
}
type cardT = {
  item: CardI;
};
const Card: FC<cardT> = ({ item }) => {
  return (
    <div className="group sm:m-2 cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 ">
      <Link href={`/movie/${item.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            item.backdrop_path || item.poster_path
          }`}
          alt=""
          height={300}
          width={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{item.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {item.original_name || item.name}
          </h2>
          <p className="flex items-center">
            {item.first_air_date || item.release_date}
            <FiThumbsUp className=" h-5 mx-2" />
            {item.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
