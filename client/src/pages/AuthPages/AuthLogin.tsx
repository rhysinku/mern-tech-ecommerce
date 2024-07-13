import { Link } from "react-router-dom";
import { GauthContent } from "../../components/AuthComponents/GauthContent";

export const AuthLogin = () => {
  return (
    <div className="block w-full">
      <div>
        <h1 className="text-6xl">Sign In</h1>
      </div>
      <form action="" className="flex flex-col gap-5 mt-6">
        <div>
          <GauthContent />
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <label className="mb-4 block">Username or Email</label>
            <input
              className="w-full h-full border-bodyColor-600 border-[1px] rounded-sm py-3 px-2 "
              type="text"
            />
          </div>
          <div>
            <label className="mb-4 block">Password</label>
            <input
              className="w-full h-full border-bodyColor-600 border-[1px] rounded-sm py-3 px-2 "
              type="password"
            />
          </div>
          <button className="btn btn_primary w-full">Login</button>
        </div>
      </form>
      <p className="italic mt-5">
        Don’t have an account?{" "}
        <Link to="/signup" className="hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};
