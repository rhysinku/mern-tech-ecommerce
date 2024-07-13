import { GAuthButton } from "./GAuthButton";

export const GauthContent = () => {
  return (
    <>
      <div>
        <GAuthButton />
      </div>
      <div className="flex gap-3 items-center mt-6">
        <span className="w-full h-[1px]  bg-bodyColor-500 inline"></span>
        <span className="text-lg ">or</span>
        <span className="w-full h-[1px]  bg-bodyColor-500 inline"></span>
      </div>
    </>
  );
};
