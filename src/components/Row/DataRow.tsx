"use client";
import Image from "next/image";
import "./DataRow.css";
import { useState, useRef, useEffect } from "react";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface DataRowProps {
  title: string;
  link: string;
}

export default function DataRow({ title, link }: DataRowProps) {
  const [data, setData] = useState<Movie[] | null>(null);
  const numbers: number[] = Array.from({ length: 20 }, (_, i) => i + 1);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/" + link;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzVjNDZjYWU0MTUxZDk5OTViY2UxZTg5NTNkYTE3MiIsInN1YiI6IjYwMDA4NzIyYmU0YjM2MDAzZTRmMGFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bcxfxaKUgab2zPyvHy87M1BCXp_SmxpsC4MedqnZVEA",
      },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const res = await response.json();
        setData(res.results as Movie[]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
      <p>{title}</p>
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
          {data &&
            data.map((movie) => (
              <a href="/" className="data_row_item" key={movie.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  alt="menu"
                  width={175}
                  height={297}
                />
              </a>
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
