import { AnchorButton } from "../Buttons/AnchorButton";
import { IoIosSearch } from "react-icons/io";

export const Navigation: React.FC = () => {
  return (
    <>
      <div className="container px-3">
        <div className="py-8">
          <div className="flex justify-between gap-3 md:gap-1 items-center flex-col md:flex-row">
            <h1 className="font-primary font-bold text-2xl">qP Gadgets</h1>
            <div className="relative md:w-3/5 w-full">
              <form action="" className="w-full h-full">
                <input
                  className=" bg-gray-200  rounded-sm px-1 py-1 w-full h-full peer"
                  type="search"
                  name=""
                  id=""
                />
                <label className="flex items-center absolute w-max inset-0 m-auto gap-2 peer-focus:opacity-0 opacity-1 transition-all pointer-events-none">
                  <span>
                    <IoIosSearch />
                  </span>
                  <span>Search</span>
                </label>
              </form>
            </div>
            <div className="flex gap-2 items-center">
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
