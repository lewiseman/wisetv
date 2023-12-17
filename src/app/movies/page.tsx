import MainPageNav from "@/components/all/MainPageNav";
import Home from "@/components/Home/Home";
import HomeTopNav from "@/components/Home/HomeTop";

export default function MoviesHomePage() {
  return (
    <MainPageNav>
      <HomeTopNav />
      <Home />
    </MainPageNav>
  );
}
