import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./CourseCard.css";

function CourseCard() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
        // console.log(response.data.results);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 784,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="lg:px-0 px-6 py-3">
      <Slider {...settings} className="">
        {movies.map((results, index) => {
          return (
            <div className="lg:px-8 px-6" key={index}>
              <div className="card w-full min-h-fit flex mx-auto bg-[#201D2F] text-[#CDD4FF]">
                <figure>
                  <img
                    src={`${process.env.REACT_APP_IMG_URL}/${results.backdrop_path}`}
                    alt={results.title}
                    className="w-full h-[150px] bg-cover"
                  />
                </figure>
                <div className="card-body text-[#CDD4FF] p-0 px-2 text-left">
                  <h2 className="card-title py-3 text-lg leading-5"></h2>
                  <h2 className="text-[15px] leading-5 mt-[-10px] font-semibold">
                    {results.title}
                  </h2>
                  <h2 className="text-sm leading-5 mt-[-7px]">
                    {results.release_date}
                  </h2>
                  <hr />
                  <ul className="flex justify-between">
                    <li>
                      <h2 className="text-[14px] font-semibold leading-5 mt-1 line-through">
                        Rp 9.000.000
                      </h2>
                    </li>
                    <li>
                      <h2 className="text-lg font-semibold leading-5 mt-1">
                        Rp 1.800.000
                      </h2>
                    </li>
                  </ul>
                  <h2 className="text-sm leading-5 text-[#F8D41C]">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <button className="btn btn-sm button-card hover:text-white normal-case mx-auto w-full mt-4 mb-4">
                    <p>Lorem</p>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default CourseCard;
