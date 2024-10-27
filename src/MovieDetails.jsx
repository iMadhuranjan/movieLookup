import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetCastOfMovie, GetMovieDetails } from "./useMovieApi";
import MovieDetailCardPage from "./MovieDetailCardPage";
import CastDetail from "./CastDetail";

const MovieDetails = () => {
  const { id } = useParams();

  const [cast, setCast] = useState();
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function GetData() {
      const data = await GetCastOfMovie(id);
      setCast(data);
    }
    async function GetMovieDetail() {
      const adata = await GetMovieDetails(id);
      setMovie(adata);
    }

    GetData();
    GetMovieDetail();
  }, []);

  const boolValue = movie && cast;
  return !boolValue ? null : (
    <>
     
      <MovieDetailCardPage {...movie} />
      <CastDetail {...cast} />
    </>
  );
};

export default MovieDetails;
