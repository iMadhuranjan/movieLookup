import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "./Store/store";

const Header = () => {

  const favourateMovie=useSelector(store=>store.fav.item)


  return (
    <div className="flex flex-col md:flex-row justify-between items-center m-1 p-2 shadow-lg">
      <div>
        <img src="/logo.jpg" alt="Logo" className="h-16 w-44" />
      </div>

      <div className="flex items-center justify-center w-full mt-2 md:mt-0">
        <ul className="flex space-x-4">
          <li className="p-2 text-lg md:text-xl font-semibold">
            <Link to="/movie">Movie</Link>
          </li>
          <li className="p-2 text-lg md:text-xl font-semibold">
            <Link to="/tv">TV Series</Link>
          </li>
          <li className="p-2 text-lg md:text-xl font-semibold">
            <Link to="/about">About</Link>
          </li>

          <li className="p-2 text-lg md:text-xl font-semibold"> <Link to="/FavList">  Favourate - </Link>{favourateMovie.length} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
