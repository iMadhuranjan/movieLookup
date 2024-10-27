/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { MOVIE_POSTER_URL, PRODUCTION_COMPANY_LOGO } from "../Constants";
import CircularRating from "./CircularRating";
import { addMovie } from "./Store/favSlice";

const MovieDetailCardPage = ({
  budget,
  genres,
  origin_country,
  overview,
  poster_path,
  production_companies,
  release_date,
  revenue,
  runtime,
  vote_average,
  title,
}) => {

  const dispach = useDispatch();

  const addToFavourate=( poster_path,
    release_date,
    runtime,
    vote_average,
    title)=>{
    dispach(addMovie( poster_path,
      release_date,
      runtime,
      vote_average,
      title));
  }



  const formattedBudget =
    budget > 0
      ? "$ " + new Intl.NumberFormat("en-US").format(budget)
      : "Not Available";
  const fomrattedRevenue =
    revenue > 0
      ? "$ " + new Intl.NumberFormat("en-US").format(revenue)
      : "Not Available";

  return (
    <div className="flex flex-col md:flex-row h-full w-[95%] mx-auto m-5 p-4 border shadow-2xl justify-center space-x-0 md:space-x-2">
      <div className="w-full md:w-[20%] p-3">
        {poster_path ? (
          <img
            src={MOVIE_POSTER_URL + poster_path}
            alt="Movie Poster"
            className="h-[450px] w-full object-cover"
          />
        ) : (
          <div className="h-[450px] w-full flex flex-col items-center justify-center bg-gray-200 border border-gray-400 relative">
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
        <h1 className="font-bold text-3xl md:text-4xl py-3">{title}</h1>
        <p className="text-base font-normal">Overview: {overview}</p>

        <div>
          <h1 className="text-2xl font-bold p-3">Movie Details</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-gray-900">
            <div>
              <p className="font-semibold">Budget:</p>
              <p className="text-gray-700">{formattedBudget}</p>
            </div>

            <div>
              <p className="font-semibold">Genres:</p>
              {genres.map((res, i) => (
                <p className="text-gray-700 text-md inline-block mr-2" key={i}>
                  {res.name}
                </p>
              ))}
            </div>

            <div>
              <p className="font-semibold">Origin Country:</p>
              <p className="text-gray-700">{origin_country}</p>
            </div>

            <div>
              <p className="font-semibold">Release Date:</p>
              <p className="text-gray-700">{release_date}</p>
            </div>

            <div>
              <p className="font-semibold">Revenue:</p>
              <p className="text-gray-700">{fomrattedRevenue}</p>
            </div>

            <div>
              <p className="font-semibold">Runtime:</p>
              <p className="text-gray-700">{runtime} Mins</p>
            </div>

            <div>
              <p className="font-semibold font-bold text-lg mb-1">
                Production Companies:
              </p>
              <div className="flex gap-2 flex-wrap">
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
          </div>
        </div>

        <div className="flex font-semibold font-bold text-lg my-2 gap-6">
          <h1 className="pt-1">Avg Ratings: </h1>
          <CircularRating rating={vote_average} />
        </div>
      </div>

      <div className="w-full md:w-[30%] p-3">
        <button className="bg-orange-400 p-5 m-4 rounded-lg text-lg font-bold " onClick={()=>{
          addToFavourate({  poster_path,
            release_date,
            runtime,
            vote_average,
            title})
        }}>
          Add to Favourate
        </button>
  
      </div>
    </div>
  );
};

export default MovieDetailCardPage;
