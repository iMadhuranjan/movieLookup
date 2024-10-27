import { useEffect, useState } from "react";
import GetMovieInfo, { SearchMovieInput } from "./useMovieApi";
import { MOVIE_POSTER_URL } from "../Constants";
import CircularRating from "./CircularRating";
import MovieShimmer from "./MovieShimmer";
import { Link } from "react-router-dom";
import MovieInput from "./MovieInput";

const MovieCard = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to get trending movies initially
  useEffect(() => {
    async function GetData() {
      const data = await GetMovieInfo();
      setMovieDetail(data.results);
      setLoading(false);
    }
    GetData();
  }, []);

  // Function to update movies based on search query
  const handleSearch = async (query) => {
    setLoading(true);
    const data = await SearchMovieInput(query);
    setMovieDetail(data.results);
    setLoading(false);
  };

  // Movie Card Component
  const MovieDisplayCard = ({
    poster_path,
    original_title,
    release_date,
    vote_average,
  }) => {
    return (
      <div className="border-2 flex flex-col p-1 w-80 md:w-72 lg:w-64 h-auto m-2 shadow-md hover:scale-105 transition-all duration-200">
        <img
          src={poster_path ? MOVIE_POSTER_URL + poster_path : "https://via.placeholder.com/300x450?text=No+Image"}
          alt={original_title || "No Image Available"}
          className="h-full w-full object-cover"
        />
        <h1 className="font-bold text-2xl md:text-xl py-2 pl-1">{original_title || "Title Not Available"}</h1>
        <h2 className="font-medium text-base md:text-base p-1">
          Release on: {release_date || "Release Date Not Available"}
        </h2>
        <div className="flex justify-evenly p-1">
          <CircularRating rating={vote_average || "N/A"} />
        </div>
      </div>
    );
  };

  return loading ? (
    <MovieShimmer />
  ) : (
    <>
      <MovieInput onSearch={handleSearch} />
      {/* <h1 className="font-bold text-3xl ml-28 mt-7">This Week Trending Movies:</h1> */}
      <div className="card flex flex-wrap p-2 m-3 justify-center">
        {movieDetail.map((movieDetail) => (
          <Link to={"/movie/" + movieDetail.id} key={movieDetail.id}>
            <MovieDisplayCard {...movieDetail} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default MovieCard;
