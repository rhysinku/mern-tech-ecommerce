import { Outlet } from "react-router-dom";
import { ShoppingAside } from "../components/ShoppingPageComponent/ShoppingAside/ShoppingAside";

export const ShoppingLayoutPage = () => {
  return (
    <main className="container min-h-screen">
      <div className="grid grid-cols-4">
        <aside className="col-span-1">
          <ShoppingAside />
        </aside>
        <div className="col-span-3">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
