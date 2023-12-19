import MainPageNav from "@/components/all/MainPageNav";
import BannerSlider from "@/components/Home/BannerSlider";
import HomeTopNav from "@/components/Home/HomeTop";
import DataRow from "@/components/Row/DataRow";

export default function MoviesHomePage() {
  return (
    <MainPageNav>
      <HomeTopNav />
      <div className="main_body">
        <BannerSlider link="trending/movie/day?language=en-US" />
        {/* <DataRow link="trending/movie/day?language=en-US" title="Trending" /> */}
        <DataRow link="movie/popular?language=en-US&page=1" title="Popular" />
        <DataRow
          link="movie/top_rated?language=en-US&page=1"
          title="Top Rated"
        />
        <DataRow
          link="movie/now_playing?language=en-US&page=1"
          title="Now Playing"
        />

        <DataRow link="movie/upcoming?language=en-US&page=1" title="Upcoming" />
      </div>
    </MainPageNav>
  );
}
