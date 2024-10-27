import { useEffect } from "react";
import { MOVIE_POSTER_URL, PRODUCTION_COMPANY_LOGO } from "../Constants";
import CircularRating from "./CircularRating";
import { useDispatch } from "react-redux";
import { addMovie } from "./Store/favSlice";

const TvDetailCardPage = ({
  first_air_date,
  poster_path,
  name,
  number_of_episodes,
  number_of_seasons,
  origin_country,
  overview,
  vote_average,
  production_companies,
  genres,
  in_production,
  next_episode_to_air,
}) => {
  useEffect(() => {}, []);

  const dispach= useDispatch();

  const addToFavourate=(first_air_date,
    poster_path,
    name,
    number_of_episodes,
    number_of_seasons,
    vote_average,
    next_episode_to_air)=>{
    dispach(addMovie(first_air_date,
      poster_path,
      name,
      number_of_episodes,
      number_of_seasons,
      vote_average,
      next_episode_to_air));
  }
  return (
    <div className="flex flex-col md:flex-row h-full w-[97%] m-5 p-2 border-1 shadow-2xl justify-center space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-full md:w-[20%] p-3">
        {poster_path ? (
          <img
            src={MOVIE_POSTER_URL + poster_path}
            alt={name || "TV Show Poster"}
            className="h-[450px] w-full object-cover rounded-md"
          />
        ) : (
          <div className="h-[450px] w-full flex flex-col items-center justify-center bg-gray-200 border border-gray-400 relative rounded-md">
            <div className="h-16 w-16 bg-gray-400 rounded-sm mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-10 h-10 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.75L3.75 12m0 0L12 19.25M3.75 12H20.25"
                />
              </svg>
            </div>
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
      </div>

      <div className="w-full md:w-[50%] p-3">
        <h1 className="font-bold text-4xl py-3">{name}</h1>
        <p className="text-base font-normal">Overview: {overview}</p>

        <div>
          <h1 className="text-2xl font-bold p-3">TV Show Details</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-900">
            {/* Number of Episodes */}
            {number_of_episodes && (
              <div>
                <p className="font-semibold">Number of Episodes:</p>
                <p className="text-gray-700">{number_of_episodes}</p>
              </div>
            )}

            {/* Number of Seasons */}
            {number_of_seasons && (
              <div>
                <p className="font-semibold">Number of Seasons:</p>
                <p className="text-gray-700">{number_of_seasons}</p>
              </div>
            )}

            {/* Origin Country */}
            {origin_country && (
              <div>
                <p className="font-semibold">Origin Country:</p>
                <p className="text-gray-700">{origin_country}</p>
              </div>
            )}

            {/* First Air Date */}
            {first_air_date && (
              <div>
                <p className="font-semibold">First Air Date:</p>
                <p className="text-gray-700">{first_air_date}</p>
              </div>
            )}

            {/* Genres */}
            {genres && genres.length > 0 && (
              <div>
                <p className="font-semibold">Genres:</p>
                {genres.map((res, i) => (
                  <p className="text-gray-700 text-md inline-block mr-2" key={i}>
                    {res.name}
                  </p>
                ))}
              </div>
            )}

            {/* In Production */}
            {in_production !== undefined && (
              <div>
                <p className="font-semibold">In Production:</p>
                <p className="text-gray-700">{in_production ? "Yes" : "No"}</p>
              </div>
            )}

            {/* Next Episode to Air */}
            {next_episode_to_air && (
              <div>
                <p className="font-semibold">Next Episode to Air:</p>
                <p className="text-gray-700">{next_episode_to_air.air_date}</p>
              </div>
            )}

            {/* Production Companies */}
            {production_companies && production_companies.length > 0 && (
              <div>
                <p className="font-semibold font-bold text-lg mb-1">Production Companies:</p>
                <div className="flex flex-wrap gap-2">
                  {production_companies.map((prod, i) => {
                    return !prod.logo_path ? null : (
                      <img
                        src={PRODUCTION_COMPANY_LOGO + prod.logo_path}
                        className="h-9 shadow-lg p-1 hover:scale-105 transition hover:cursor-pointer"
                        alt=""
                        key={i}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex font-semibold font-bold text-lg my-2 gap-6">
          <h1 className="pt-1">Avg Ratings:</h1>
          <CircularRating rating={vote_average} />
        </div>
      </div>

      <div className="w-full md:w-[30%] p-3">
      <button className="bg-orange-400 p-5 m-4 rounded-lg text-lg font-bold " onClick={()=>{
          addToFavourate({first_air_date,
            poster_path,
            name,
            number_of_episodes,
            number_of_seasons,
            vote_average,
            next_episode_to_air})
        }}>
          Add to Favourate
        </button>
      </div>
    </div>
  );
};

export default TvDetailCardPage;
