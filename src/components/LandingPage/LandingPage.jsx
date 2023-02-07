import React from "react";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";

function LandingPage() {
  return (
    <div>
      <div className="min-h-fit">
        <Navbar />
      </div>
      <Carousel />
      <Section />
      <Footer />
    </div>
  );
}

export default LandingPage;
