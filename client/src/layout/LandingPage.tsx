import { Outlet } from "react-router-dom";
import { Navigation } from "../components/NavigationComponent/Navigation";
import { Footer } from "../components/FooterComponent/Footer";

function LandingPage() {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default LandingPage;
