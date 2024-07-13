import { Outlet } from "react-router-dom";

export const AuthPage = () => {
  return (
    <>
      <div>
        <div className="max-w-screen-2xl w-full m-auto">
          <div className="lg:grid lg:grid-cols-2">
            <div className="hidden lg:block">
              <figure>
                <img src="https://picsum.photos/768/956" alt="" />
              </figure>
            </div>
            <section className="px-8 py-7 flex items-center justify-center">
              <Outlet />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
