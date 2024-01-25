"use client"
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      lazyLoad: true,
      slidesToShow: 3,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="w-10/12 mx-auto text-center">
        <h2 className="text-3xl font-semibold p-1">Simple User</h2>
        <h1 className="text-3xl font-semibold p-1">interface that user feel easy</h1>
        <p className="text-gray-600 text-sm w-1/2 mx-auto my-3 mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit mollitia ullam totam obcaecati consequatur debitis architecto necessitatibus ut excepturi repellendus labore odio ipsam blanditiis assumenda, voluptate facilis, ex reiciendis aspernatur.</p>
        <Slider {...settings}>
          <div className="h-[60vh] bg-blue-500 ">
            <img src="" className="w-2/3 bg-black h-[90%] mx-auto rounded-xl my-auto" alt="" />
          </div>
          <div className="h-[60vh] bg-blue-500 ">
            <img src="" className="w-2/3 bg-black h-[90%] mx-auto rounded-xl my-auto" alt="" />
          </div>
          <div className="h-[60vh] bg-blue-500 ">
            <img src="" className="w-2/3 bg-black h-[90%] mx-auto rounded-xl my-auto" alt="" />
          </div>
          <div className="h-[60vh] bg-blue-500 ">
            <img src="" className="w-2/3 bg-black h-[90%] mx-auto rounded-xl my-auto" alt="" />
          </div>
          <div className="h-[60vh] bg-blue-500 ">
            <img src="" className="w-2/3 bg-black h-[90%] mx-auto rounded-xl my-auto" alt="" />
          </div>
          <div className="h-[60vh] bg-blue-500 ">
            <img src="" className="w-2/3 bg-black h-[90%] mx-auto rounded-xl my-auto" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}