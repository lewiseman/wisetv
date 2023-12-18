"use client";
import Image from "next/image";
import "./DataRow.css";
import { useState, useRef } from "react";

export default function DataRow() {
  const numbers: number[] = Array.from({ length: 20 }, (_, i) => i + 1);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  return (
    <div className="data_row_container">
      <p>Popular</p>
      <div className="data_row" ref={sliderContainer}>
        <div className="data_row_nav left">
          <button onClick={scrollLeft}>
            <Image
              src="/arrow_left.svg"
              alt="menu"
              width={24}
              height={24}
              priority
            />
          </button>
        </div>
        <div className="data_row_slider" ref={sliderRef}>
          {numbers.map((number) => (
            <div className="data_row_item" key={number}>
              {number}
            </div>
          ))}
        </div>
        <div className="data_row_nav right">
          <button onClick={scrollRight}>
            <Image
              src="/arrow_right.svg"
              alt="menu"
              width={24}
              height={24}
              priority
            />
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="data_row_slider" ref={sliderRef}>
          <button onClick={scrollLeft}>Left</button>
          <div
            className="numbers-container"
            style={{ transform: `translateX(${scrollPosition}px)` }}
          >
            {numbers.map((number) => (
              <div className="number-item" key={number}>
                {number}
              </div>
            ))}
          </div>
          <button onClick={scrollRight}>Right</button>
        </div> */
}
