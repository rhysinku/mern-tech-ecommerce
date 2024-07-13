import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./layout/LandingPage";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<LandingPage />} />)
  );

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
