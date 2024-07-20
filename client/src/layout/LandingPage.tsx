import { Outlet } from "react-router-dom";
import { Navigation } from "../components/NavigationComponent/Navigation";
import { Footer } from "../components/FooterComponent/Footer";

function LandingPage() {
  return (
    <>
      <div>
        <header>
          <Navigation />
        </header>
        <div>
          <Outlet />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
