import { useState } from "react";

const MovieInput = ({ onSearch }) => {
  const [userInput, setUserInput] = useState("");

  const handleSearchClick = () => {
    if (userInput.trim()) {
      onSearch(userInput); // Call the search function passed as a prop
    }
  };

  return (
    <div className="p-5">
      <h2 className="font-bold text-2xl text-center mb-6">Search for Your Movie 🔍</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <input
          value={userInput}
          placeholder="Search from 160,000+ Movie..."
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base w-full sm:w-80 h-12"
        />
        <button
          className="bg-violet-500 hover:bg-violet-700 px-5 py-2 rounded-lg text-white w-full sm:w-auto"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default MovieInput;
