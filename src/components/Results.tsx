import React, { FC } from "react";
import Card, { CardI } from "./Card";

interface ResultsProps {
  result: [
    {
      adult: boolean;
      backdrop_path: string;
      genre_ids: [];
      id: number;
      overview: string;
    }
  ];
}

type ResultT = {
  result: [];
};
const Results: FC<ResultT> = ({ result }) => {
  return (
    <div className="sm:grid sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 py-4 mx-auto max-w-6xl">
      {result.map((result: CardI) => (
        <div key={result.id}>
          <Card item={result} />
        </div>
      ))}
    </div>
  );
};

export default Results;
