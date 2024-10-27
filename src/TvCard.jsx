import { useEffect, useState } from "react";
import { GetTvInfo, SearchTvInput } from './useMovieApi'; // Make sure to import your search function
import { MOVIE_POSTER_URL } from "../Constants";
import CircularRating from "./CircularRating";
import MovieShimmer from "./MovieShimmer";
import TvInput from "./TvInput";
import { Link } from "react-router-dom"; // Import Link for navigation

const TvCard = () => {
  const [tvSeries, setTvSeries] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

  useEffect(() => {
    async function fetchData() {
      if (searchQuery) {
        const data = await SearchTvInput(searchQuery); // Fetch search results based on query
        setTvSeries(data.results);
      } else {
        const data = await GetTvInfo(); // If no search query, fetch default TV series
        setTvSeries(data.results);
      }
    }
    fetchData();
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query when the user searches
  };

  const TvDisplayCard = ({ poster_path, name, first_air_date, vote_average, id }) => {
    return (
      <Link to={`/tv/${id}`} key={id}> {/* Wrap card in Link for navigation */}
        <div className="border-2 flex flex-col p-2 w-80 lg:w-60 h-auto m-2 shadow-md hover:scale-105 transition-all duration-200">
          <img
            src={poster_path ? MOVIE_POSTER_URL + poster_path : "https://via.placeholder.com/300x450?text=No+Image"}
            alt={name || "No Image Available"}
            className="h-full w-full rounded-t-md"
          />
          <h1 className="font-bold text-2xl lg:text-xl py-2 pl-1">{name}</h1>
          <h2 className="font-medium text-sm p-1">Release on: {first_air_date}</h2>
          <div className="flex justify-center p-1">
            <CircularRating rating={vote_average} />
          </div>
        </div>
      </Link>
    );
  };

  return !tvSeries.length ? (
    <MovieShimmer />
  ) : (
    <>
      <TvInput onSearch={handleSearch} /> {/* Pass the search handler as a prop */}
      <h1 className="font-bold text-3xl text-center mt-7 mb-4">This Week Trending TV Series:</h1>
      <div className="card flex flex-wrap p-2 justify-center">
        {tvSeries.map((tvSeriesItem) => (
          <TvDisplayCard key={tvSeriesItem.id} {...tvSeriesItem} />
        ))}
      </div>
    </>
  );
};

export default TvCard;
