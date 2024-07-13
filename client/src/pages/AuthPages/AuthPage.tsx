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
            <section>
              <Outlet />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
