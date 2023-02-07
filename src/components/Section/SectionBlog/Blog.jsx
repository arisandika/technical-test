import React, { useEffect, useState } from "react";
import "./Blog.css";
import request from "../../../Requests";
import axios from "axios";

const Blog = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movies);

  return (
    <div className="blog px-7">
      <div className="grid lg:grid-cols-3 grid-cols-1 text-white">
        <div className="max-w-xs mb-2 rounded-lg shadow-lg mx-auto">
          <div className="">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt="hero"
              className="h-full w-full bg-cover"
            />
            <div className="py-4">
              <h1 className="lg:pb-2 lg:pt-6 pb-1 pt-2 text-lg font-semibold">
                {movie?.title}
              </h1>
              <p className="text-sm text-justify px-4">{movie?.overview}</p>
            </div>
          </div>
        </div>
        <div className="max-w-xs mb-2 rounded-lg shadow-lg mx-auto">
          <div className="">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt="hero"
              className="h-full w-full bg-cover"
            />
            <div className="py-4">
              <h1 className="lg:pb-2 lg:pt-6 pb-1 pt-2 text-lg font-semibold">
                {movie?.title}
              </h1>
              <p className="text-sm text-justify px-4">{movie?.overview}</p>
            </div>
          </div>
        </div>
        <div className="max-w-xs mb-2 rounded-lg shadow-lg mx-auto">
          <div className="">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt="hero"
              className="h-full w-full bg-cover"
            />
            <div className="py-4">
              <h1 className="lg:pb-2 lg:pt-6 pb-1 pt-2 text-lg font-semibold">
                {movie?.title}
              </h1>
              <p className="text-sm text-justify px-4">{movie?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
