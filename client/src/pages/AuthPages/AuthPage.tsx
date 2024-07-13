import { Outlet } from "react-router-dom";

export const AuthPage = () => {
  return (
    <>
      <div>
        <div className="m-auto w-full max-w-screen-2xl">
          <div className="lg:grid lg:grid-cols-2">
            <div className="hidden lg:block">
              <figure>
                <img src="https://picsum.photos/768/956" alt="" />
              </figure>
            </div>
            <section className="flex items-center justify-center px-8 py-7">
              <Outlet />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
