"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function MovieHomePage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Movie | null>(null);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
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
        setData(res as Movie);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {data && (
        <div>
          {/* <Image
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt={data.title}
            width={200}
            height={100}
          /> */}
          <a href={`${data.id}/watch`} className="movie_play">
            Play
          </a>
        </div>
      )}
    </div>
  );
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Belongstocollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface Spokenlanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
interface Productioncountry {
  iso_3166_1: string;
  name: string;
}
interface Productioncompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
interface Genre {
  id: number;
  name: string;
}
interface Belongstocollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
