const MovieShimmer = () => {
    return (
      <div className="card flex flex-wrap gap-4 p-2 m-3 justify-center">
        {
          Array(15).fill().map((_, index) => ( // Generate 8 shimmer cards
            <div key={index} className="border-2 border-gray-300 flex flex-col p-3 h-[430px] w-60 shimmer">
              <div className="h-96 w-full bg-gray-300 shimmer-item" />
              <h1 className="h-10 w-3/4 bg-gray-300 mt-3 shimmer-item" />
              <h1 className="h-4 w-1/2 bg-gray-300 mt-1 shimmer-item" />
              <h1 className="h-4 w-1/4 bg-gray-300 mt-1 shimmer-item" />
            </div>
          ))
        }
      </div>
    );
  };
  
  export default MovieShimmer;
  