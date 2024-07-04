import React, { FC } from "react";

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
// original_language: 'en',
// original_title: 'The Shawshank Redemption',
// popularity: 120.189,
// poster_path: '/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
// release_date: '1994-09-23',
// title: 'The Shawshank Redemption',
// video: false,
// vote_average: 8.705,
// vote_count: 26394
const Results: FC<ResultsProps> = ({ result }) => {
  return <div></div>;
};

export default Results;
