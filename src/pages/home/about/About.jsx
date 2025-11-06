import React from "react";
import "./about.css";
import TestimonialCarousel from "../../../components/home/about/TestimonialCarousel";

const About = () => {
  return (
    <section className="section-about">
      <div className="content-about">
        <div className="left">
            <img src="./images/home/about/comilla.png" alt="comilla" />
            <div className="title-about">Que dicen sobre AMUYUKI</div>
            <div className="sub-about">Más de 3000 usuarios han sido usado Amuyuki para aprender sobre la cultura andina.</div>
        </div>
        <div className="right">
            <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default About;
