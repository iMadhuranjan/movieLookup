
const API_TOKEN='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDVhZmQ5YzViY2Y4YjBmZjRkYzVlYjBiMTIzNWFhZiIsIm5iZiI6MTcyODQwMzkwMy40MTYwODQsInN1YiI6IjY0MTFhMmRlYTZjMTA0MDA3OTA2NjNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mU_1DbPRSnXffmsQwLXyiTbBxhQW-B3L8YiFfQ-OW48';

const GetMovieInfo=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/trending/movie/week', {
        method:'GET',
        headers: {
            Authorization:`Bearer ${API_TOKEN}`,
            accept:'application/json'
        }
    })
    const MyData=await data.json();
    return MyData;
}


export const GetTvInfo=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/trending/tv/week', {
        method:'GET',
        headers: {
            Authorization:`Bearer ${API_TOKEN}`,
            accept:'application/json'
        }
    })
    const MyData=await data.json();
    return MyData;
}


export const GetCastOfMovie=async(movieId)=>{
    const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, {
        method:'GET',
        headers: {
            Authorization:`Bearer ${API_TOKEN}`,
            accept:'application/json'
        }
    })
    const MyData=await data.json();
    return MyData.cast;
}

export const GetCastOfTv=async(movieId)=>{
    const data=await fetch(`https://api.themoviedb.org/3/tv/${movieId}/credits`, {
        method:'GET',
        headers: {
            Authorization:`Bearer ${API_TOKEN}`,
            accept:'application/json'
        }
    })
    const MyData=await data.json();
    return MyData.cast;
}


export const GetMovieDetails=async(movieId)=>{
    const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
        method:'GET',
        headers: {
            Authorization:`Bearer ${API_TOKEN}`,
            accept:'application/json'
        }
    })
    const MyData=await data.json();
    return MyData;
}

export const GetTvDetails=async(movieId)=>{
    const data=await fetch(`https://api.themoviedb.org/3/tv/${movieId}`, {
        method:'GET',
        headers: {
            Authorization:`Bearer ${API_TOKEN}`,
            accept:'application/json'
        }
    })
    const MyData=await data.json();
    return MyData;
}

export const SearchMovieInput=async(movieId)=>{
    const data=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieId}&include_adult=true&language=en-US`, {
        method:'GET',
        headers: {
            Authorization:`Bearer ${API_TOKEN}`,
            accept:'application/json'
        }
    })
    const MyData=await data.json();
    return MyData;
}

export const SearchTvInput=async(movieId)=>{
    const data=await fetch(`https://api.themoviedb.org/3/search/tv?query=${movieId}&include_adult=true&language=en-US&page=1`, {
        method:'GET',
        headers: {
            Authorization:`Bearer ${API_TOKEN}`,
            accept:'application/json'
        }
    })
    const MyData=await data.json();
    return MyData;
}

export default GetMovieInfo;