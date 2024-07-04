import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
import Results from "./components/Results";

const apiKey = process.env.API_KEY;
const resultanat = [
  {
    adult: true,
    backdrop_path: "/backpath",
    genre_ids: [80, 78],
    id: 50564,
    overview: "blhdsahdfhsadbfg",
  },
];

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    genre?: string;
  };
}) {
  const genre = searchParams?.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${apiKey}&language=en-US&page=1`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const results = data.results;
  console.log(results);
  return (
    <>
      <div className="flex items-center justify-center ">
        <div>
          {results.map(
            (result: {
              id: string;
              overview: string;
              original_title: string;
            }) => (
              <div key={result.id}>
                <h2>{result.overview}</h2>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
