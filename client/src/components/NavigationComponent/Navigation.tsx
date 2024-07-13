import { Button } from "../Buttons/Button";

export const Navigation: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="py-3">
          <div className="flex justify-between gap-1">
            <h1 className="font-primary font-bold">qP Gadgets</h1>
            <div>
              <form action="">
                <input
                  className="box-content bg-gray-200"
                  type="search"
                  name=""
                  id=""
                />
                <label>
                  <span>Search</span>
                </label>
              </form>
            </div>
            <div className="flex gap-5 items-center">
              <Button>Log In</Button>
              <Button className={`btn_secondary`}>Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
