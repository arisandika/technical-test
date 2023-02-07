import React, { Fragment, useEffect, useState } from "react";
import "./Carousel.css";
import request from "../../Requests";
import axios from "axios";

const Carousel = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movies);

  return (
    <Fragment>
      <div className="w-full lg:h-[600px] h-[600px] text-white">
        <div className="carousel w-full h-full">
          <div className="carousel-item relative w-full lg:h-[600px] h-[600px]">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              className="lg:w-full w-0 h-full object-cover opacity-60"
            />
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              className="lg:w-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute justify-center transform -translate-y-1/2 lg:left-5 lg:right-5 left-0 right-0 top-1/2">
              <div className="hero-content text-center">
                <div className="w-96 text-center">
                  <h1 className="mb-3 lg:text-4xl text-2xl font-semibold">
                    {movie?.title}
                  </h1>
                  <p className="">{movie?.release_date}</p>
                  <p className="mb-5 lg:text-sm text-sm sm:text-lg">
                    {movie?.overview}
                  </p>
                  <button className="btn btn-sm button-hero hover:text-white normal-case">
                    <p>Lorem ipsum</p>
                  </button>
                </div>
              </div>
              <div className="hero-overlay bg-opacity-60 lg:block hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Carousel;
