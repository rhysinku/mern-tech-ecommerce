import { Outlet } from "react-router-dom";

export const AuthPage = () => {
  return (
    <>
      <div>
        <div className="max-w-screen-2xl w-full m-auto">
          <div className="grid grid-cols-2">
            <div>
              <figure>
                <img src="https://picsum.photos/768/956" alt="" />
              </figure>
            </div>
            <section className="px-8 py-7">
              <Outlet />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
