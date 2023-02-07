import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./ProductCard.css";

function ProductCard() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProduct = await response.json();
    setProducts(dataProduct);
    // console.log(products);
  };

  useEffect(() => {
    getDataProducts();
  });

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
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
        {products.map((index) => {
          return (
            <div className="lg:px-4 px-6" key={index}>
              <div className="card w-full min-h-fit flex mx-auto bg-[#201D2F] text-[#CDD4FF]">
                <figure>
                  <img
                    src={index.image}
                    alt="Shoes"
                    className="w-full h-[241px]"
                  />
                </figure>
                <div className="card-body text-[#CDD4FF] p-0 px-2 text-left">
                  <h2 className="card-title py-3 text-lg leading-5">
                    {index.title}
                  </h2>
                  <p className="leading-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-4 h-4 text-center mr-2 text-[#CDD4FF]"
                    >
                      <path
                        fill="#CDD4FF"
                        d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"
                      />
                    </svg>
                    <a href="#" className="hover:underline font-semibold">
                      XXXX
                    </a>
                    <a href="#" className="hover:underline ml-2 text-[13px]">
                      {index.category}
                    </a>
                  </p>
                  <h2 className="text-base font-semibold leading-5 mt-1">
                    Lorem ipsum
                  </h2>
                  <h2 className="text-sm leading-5 mt-[-7px]">
                    Rate {index.rating.rate} / 5
                  </h2>
                  <hr />
                  <h2 className="text-base font-semibold leading-5 mt-1">
                    $ {index.price}
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

export default ProductCard;
