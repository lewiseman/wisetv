import DataRow from "../Row/DataRow";
import BannerSlider from "./BannerSlider";

export default function Home() {
  return (
    <div className="main_body">
      <BannerSlider />
      {/* <DataRow link="trending/movie/day?language=en-US" title="Trending" /> */}
      <DataRow link="movie/popular?language=en-US&page=1" title="Popular" />
      <DataRow link="movie/top_rated?language=en-US&page=1" title="Top Rated" />
      <DataRow
        link="movie/now_playing?language=en-US&page=1"
        title="Now Playing"
      />

      <DataRow link="movie/upcoming?language=en-US&page=1" title="Upcoming" />
    </div>
  );
}
