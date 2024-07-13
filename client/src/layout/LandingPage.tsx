import { Outlet } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default LandingPage;
