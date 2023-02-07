import "./Section.css";
import React, { Fragment } from "react";
import Blog from "./SectionBlog/Blog";
import Product from "./SectionProduct/Product";
import Course from "./SectionCourse/Course";
import Promo from "./SectionPromo/Promo";

const Section = () => {
  return (
    <Fragment>
      <div className="section lg:px-20 text-white px-6 py-4 lg:pt-10 pt-8 min-h-fit">
        <div>
          <h1 className="text-left text-2xl font-semibold mb-1">Title Ipsum</h1>
          <p className="text-left">Swipe for more item</p>
        </div>
        <Product />
      </div>
      <Blog />
      <div className="section-2 lg:px-20 text-white px-6 py-4 pt-6 min-h-fit">
        <div className="text-left text-2xl font-semibold">
          Lorem ipsum dolor sit amet
        </div>
        <Course />
      </div>
      <Promo />
    </Fragment>
  );
};

export default Section;
