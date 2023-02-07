import React, { Fragment } from "react";
import "./Course.css";
import CourseCard from "./CourseCard";

const Course = () => {
  return (
    <Fragment>
      <div className="min-h-fit lg:mb-8 mb-0 py-2">
        <CourseCard />
      </div>
    </Fragment>
  );
};

export default Course;
