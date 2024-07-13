import { AnchorButton } from "../Buttons/AnchorButton";
import { IoIosSearch } from "react-icons/io";

export const Navigation: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="py-8">
          <div className="flex justify-between gap-1 items-center">
            <h1 className="font-primary font-bold text-2xl">qP Gadgets</h1>
            <div className="relative w-3/5">
              <form action="" className="w-full h-full">
                <input
                  className=" bg-gray-200  rounded-sm px-1 py-1 w-full h-full "
                  type="search"
                  name=""
                  id=""
                />
                <label className="flex items-center absolute w-max inset-0 m-auto gap-2">
                  <span>
                    <IoIosSearch />
                  </span>
                  <span>Search</span>
                </label>
              </form>
            </div>
            <div className="flex gap-5 items-center">
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
