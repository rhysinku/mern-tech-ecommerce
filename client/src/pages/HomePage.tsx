import { Banner } from "../components/BannerComponents/Banner";
import { MiddleComponent } from "../components/HomePageComponents/MiddlePageComponents/MiddleComponent";

function HomePage() {
  return (
    <div>
      <Banner />
      <div className="container px-2">
        <MiddleComponent />
      </div>
    </div>
  );
}

export default HomePage;
