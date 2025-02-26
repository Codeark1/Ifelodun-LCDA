"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import Hero4 from "../components/Hero4";
import { slides } from "../data/slides";
import Map from "../components/Map";
import Project from "../components/Project"






const Page = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="h-screen">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="relative h-screen bg-cover bg-center flex items-center justify-start transition-all duration-1000"
              style={{ backgroundImage: `url(${slide.src})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
              {/* Text Content */}
              <div className="max-w-xl ml-8 text-left font-sans relative z-10">
                <h1 className="text-white text-4xl font-bold px-4 py-2 inline-block">
                  {slide.title}
                </h1>
                <h2 className="text-white text-2xl font-semibold mt-4 px-4 py-1 inline-block">
                  {slide.subtitle}
                </h2>
                <p className="text-white text-lg mt-4 px-4 py-2 rounded">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    <Hero2/>
    <Hero3/>
    <Project/>
    <Hero4/>
<Map/>


    </div>
  );
};

export default Page;
