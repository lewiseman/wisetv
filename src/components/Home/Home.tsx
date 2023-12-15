import DataRow from "../Row/DataRow";
import BannerSlider from "./BannerSlider";

export default function Home() {
  return (
    <div className="main_body">
      <BannerSlider />
      <DataRow />
    </div>
  );
}
