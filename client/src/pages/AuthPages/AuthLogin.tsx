import { Link } from "react-router-dom";
import { GauthContent } from "../../components/AuthComponents/GauthContent";

export const AuthLogin = () => {
  return (
    <div className="block w-full">
      <div>
        <h1 className="text-4xl">Sign In</h1>
      </div>
      <form action="" className="flex flex-col gap-5 mt-6">
        <div>
          <GauthContent />
        </div>
        <div>
          <div>
            <label>Username or Email</label>
            <input type="text" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
          </div>
          <button className="btn btn_primary w-full">Login</button>
        </div>
      </form>
      <p className="italic ">
        Don’t have an account?{" "}
        <Link to="/signup" className="hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};
