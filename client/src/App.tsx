import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./layout/LandingPage";
import HomePage from "./pages/HomePage";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LandingPage />}>
        <Route index element={<HomePage />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
