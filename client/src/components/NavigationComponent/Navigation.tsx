import { AnchorButton } from "../Buttons/AnchorButton";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <>
      <div className="container px-3">
        <div className="py-8">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row md:gap-1">
            <h1 className="font-primary text-2xl font-bold">
              <Link to={"/"}>qP Gadgets</Link>
            </h1>
            <div className="relative w-full md:w-3/5">
              <form action="" className="h-full w-full">
                <input
                  className="peer h-full w-full rounded-sm bg-gray-200 px-1 py-1"
                  type="search"
                  name=""
                  id=""
                />
                <label className="opacity-1 pointer-events-none absolute inset-0 m-auto flex w-max items-center gap-2 transition-all peer-focus:opacity-0">
                  <span>
                    <IoIosSearch />
                  </span>
                  <span>Search</span>
                </label>
              </form>
            </div>
            <div className="flex items-center gap-2">
              <AnchorButton to={`signin`}>Log In</AnchorButton>
              <AnchorButton to={`signup`} className={`btn_secondary`}>
                Sign Up
              </AnchorButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
