import { Banner } from "../components/BannerComponents/Banner";
import { BottomComponent } from "../components/HomePageComponents/BottomPageComponents/BottomComponent";
import { MainComponent } from "../components/HomePageComponents/MainPageComponents/MainComponent";
import { MiddleComponent } from "../components/HomePageComponents/MiddlePageComponents/MiddleComponent";

function HomePage() {
  return (
    <div>
      <Banner />
      <div className="container px-2">
        <MiddleComponent />
        <MainComponent />
        <BottomComponent />
      </div>
    </div>
  );
}

export default HomePage;
