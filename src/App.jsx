import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { createRoot } from "react-dom/client";
import About from "./About";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
import TvCard from "./TvCard";
import TvDetailCard from "./TvDetailCard";
import { Provider } from "react-redux";
import store from "./Store/store";
import FavList from "./Store/FavList";

const Home = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </ Provider>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <MovieCard />,
      },
      {
        path: "/movie",
        element: <MovieCard />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "/tv",
        element: <TvCard />,
      },
      {
        path: "/tv/:id",
        element: <TvDetailCard />,
      },{
        path: "/FavList",
        element: <FavList />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
