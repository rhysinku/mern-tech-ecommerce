import { FaGoogle } from "react-icons/fa";

export const GAuthButton = () => {
  return (
    <button className="btn flex items-center bg-red-600 text-white w-full justify-center gap-3 hover:bg-red-400">
      <span>
        <FaGoogle />
      </span>
      <span className="text-lg">Continue to Google</span>
    </button>
  );
};
