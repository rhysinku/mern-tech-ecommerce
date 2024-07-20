import { Banner } from "../components/BannerComponents/Banner";
import { MainComponent } from "../components/HomePageComponents/MainPageComponents/MainComponent";
import { MiddleComponent } from "../components/HomePageComponents/MiddlePageComponents/MiddleComponent";

function HomePage() {
  return (
    <div>
      <Banner />
      <div className="container px-2">
        <MiddleComponent />
        <MainComponent />
      </div>
    </div>
  );
}

export default HomePage;
