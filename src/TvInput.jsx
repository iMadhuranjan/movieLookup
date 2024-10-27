import { useState } from "react";

const TvInput = ({ onSearch }) => {
  const [userInput, setUserInput] = useState("");

  const handleSearchClick = () => {
    if (userInput.trim()) {
      onSearch(userInput); // Call the search function passed as a prop
    }
  };

  return (
    <div className="p-5">
      <h2 className="font-bold text-3xl text-center">Search for Your TV Series 🔍</h2>
      <div className="flex flex-col md:flex-row justify-center gap-5 mt-5">
        <input
          value={userInput}
          placeholder="Search from 160,000+ TV Series..."
          onChange={(e) => setUserInput(e.target.value)}
          className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base sm:text-sm w-full md:w-96 h-12"
        />
        <button
          className="bg-violet-500 hover:bg-violet-700 px-5 rounded-lg text-white h-12"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default TvInput;
