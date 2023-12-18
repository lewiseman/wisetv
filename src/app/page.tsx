import MainPageNav from "@/components/all/MainPageNav";
import BannerSlider from "@/components/Home/BannerSlider";
import HomeTopNav from "@/components/Home/HomeTop";
import DataRow from "@/components/Row/DataRow";

export default function TvShowHomePage() {
  return (
    <MainPageNav>
      <HomeTopNav />
      <div className="main_body">
        <BannerSlider />
        {/* <DataRow link="trending/movie/day?language=en-US" title="Trending" /> */}
        <DataRow link="tv/popular?language=en-US&page=1" title="Popular" />
        <DataRow link="tv/top_rated?language=en-US&page=1" title="Top Rated" />
        <DataRow
          link="tv/on_the_air?language=en-US&page=1"
          title="On The Air"
        />
        <DataRow link="movie/upcoming?language=en-US&page=1" title="Upcoming" />
      </div>
    </MainPageNav>
  );
}
