import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetCastOfTv, GetTvDetails } from "./useMovieApi";
import CastDetail from "./CastDetail";
import TvDetailCardPage from "./TvDetailCardPage";

const TvDetailCard= ()=>{

    const {id}=useParams();
    const [tvSeries, setTvSeries]=useState();
    const [tvcast, setTvCast]=useState();

    useEffect(()=>{
        async function GetData() {
            const data = await GetCastOfTv(id);
            setTvCast(data);
          }

          async function GetCastData() {
            const data = await GetTvDetails(id);
            setTvSeries(data);
          }

          GetData();
          GetCastData();
    },)
    
    const boolValue= tvSeries && tvcast;
     return (!boolValue)? null : (
        <>
        <TvDetailCardPage {...tvSeries}/>
        <CastDetail {...tvcast} />
        </>
     )
}

export default TvDetailCard;