"use client";
import styles from "./BannerSlider.module.css";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

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
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function BannerSlider({ link }: { link: string }) {
  const [data, setData] = useState<Movie[] | null>(null);
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
        setData(res.results.slice(0, 5) as Movie[]);
        console.log(res.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={`${styles.carousel_container}`}>
      <div className={`${styles.carousel}`}>
        <div className={`${styles.carousel_slider}`}>
          {data &&
            data.map((item, index) => (
              <a
                href=""
                key={item.id}
                id={`carousel_${index}`}
                className={`${styles.carousel_item}`}
              >
                <img
                  className={`${styles.carousel_image}`}
                  src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
                />
                <div className={`${styles.carousel_item_info}`}>
                  <h2 className={`${styles.carousel_item_title}`}>
                    {item.name}
                  </h2>
                  <p className={`${styles.carousel_item_rating}`}>
                    {String(item.vote_average).slice(0, 3)}{" "}
                    <Image src="/star.svg" width={15} height={15} alt="" />
                  </p>
                  <p className={`${styles.carousel_item_overview}`}>
                    {item.overview}
                  </p>
                </div>
              </a>
            ))}
        </div>
        <div className={`${styles.carousel_nav}`}>
          {data &&
            data.map((item, index) => (
              <a key={index} href={`#carousel_${index}`}></a>
            ))}
        </div>
      </div>
    </div>
  );
}
