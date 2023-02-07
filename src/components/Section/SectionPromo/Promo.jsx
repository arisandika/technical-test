import "./Promo.css";
import React from "react";

const Promo = () => {
  return (
    <div>
      <div className="lg:px-[100px] px-[28px]">
        <div className="hero-content flex-col lg:flex-row text-white text-left py-4 lg:pb-14 pb-10 px-0">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="2xl:w-[676px] lg:w-[476px] w-[291px] rounded-lg shadow-2xl"
          />
          <div className="lg:ml-4 lg:mr-3">
            <h1 className="lg:text-3xl text-xl font-semibold mb-[-16px]">
              Lorem ipsum dolor sit amet consectetur. Est tortor varius.
            </h1>
            <ul className="list-outside list-disc mx-4">
              <li className="py-6 lg:text-lg text-sm mb-[-10px]">
                Lorem ipsum dolor sit amet consectetur. Purus in tincidunt urna
                ornare augue dignissim tristique mauris tellus. Amet lectus sit
                ipsum lorem sed fringilla. Dictumst posuere mi rhoncus faucibus.
                Et.
              </li>
            </ul>
            <button className="btn btn-sm button-promo hover:text-white normal-case">
              <p>Lorem ipsum</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
