import { Link } from "react-router-dom";
import { GauthContent } from "../../components/AuthComponents/GauthContent";

export const AuthSignIn = () => {
  return (
    <div className="block w-full">
      <div>
        <h1 className="text-6xl">Sign Up</h1>
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
          <div>
            <label className="mb-4 block">Confirm Password</label>
            <input
              className="w-full h-full border-bodyColor-600 border-[1px] rounded-sm py-3 px-2 "
              type="password"
            />
          </div>
          <button className="btn btn_primary w-full">Sign Up</button>
        </div>
      </form>
      <p className="italic mt-5">
        Already have an account?
        <Link to="/signin" className="hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
};
