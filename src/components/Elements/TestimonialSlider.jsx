import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Prestige Industrial and Engineering Solution elevated our operations with their unmatched expertise. Their guidance and solutions made a significant impact on our business."
            author="Minyahil Debebe, CEO, Beverage Corporation"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Their innovative approach and actionable solutions exceeded our expectations, driving real results for our company."
            author="Jane Smith, Operations Manager, Car Assembly Inc."
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Prestige is more than a consultant—they're a partner in our growth, committed to our success at every step"
            author="Michael Johnson, Director of Operations, Medical Textiles LLC

"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
