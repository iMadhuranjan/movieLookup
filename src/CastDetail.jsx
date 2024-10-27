import { MOVIE_POSTER_URL } from "../Constants";

const CastDetail = (cast) => {
  const castArray = Object.values(cast);

  return (
    <div className="flex flex-col h-auto w-[95%] mx-auto my-5 p-4 border shadow-xl rounded-lg bg-white">
      <h1 className="font-bold text-4xl text-center p-5">Cast And Crew</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {castArray.map((castInfo, i) => {
          return !castInfo.profile_path || i > 52 ? null : (
            <div
              className="flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl rounded-lg overflow-hidden"
              key={castInfo.id}
            >
              <img
                src={MOVIE_POSTER_URL + castInfo.profile_path}
                alt={castInfo.original_name}
                className="w-60 h-80 object-cover" // Ensures the image maintains its aspect ratio
              />
              <div className="p-3 text-center">
                <p className="font-semibold text-lg">{castInfo.original_name}</p>
                <p className="font-normal text-sm text-gray-600">{castInfo.character}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CastDetail;
