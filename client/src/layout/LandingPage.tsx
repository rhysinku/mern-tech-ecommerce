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
        <main className="container">
          <Outlet />
        </main>
        <footer className="container">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
