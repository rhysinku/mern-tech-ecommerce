

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./layout/LandingPage";

import HomePage from "./pages/HomePage";
import { AuthPage } from "./pages/AuthPages/AuthPage";
import { AuthLogin } from "./pages/AuthPages/AuthLogin";
import { AuthSignIn } from "./pages/AuthPages/AuthSignIn";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LandingPage />}>
        <Route index element={<HomePage />} />

        <Route element={<AuthPage />}>
          <Route path="/signin" element={<AuthLogin />} />
          <Route path="/signup" element={<AuthSignIn />} />
        </Route>
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
