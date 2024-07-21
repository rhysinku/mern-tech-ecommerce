import useQuery from "../../hooks/useQuery";

export const ShoppingPageHome = () => {
  const query = useQuery();
  const category = query.get("category");

  return (
    <>
      <div className="w-full rounded-sm bg-slate-50 px-3 py-9">
        <div className="text-center text-8xl">
          <h1>Shopping Page Home</h1>
        </div>
        <p>{category || `No Category Selected`}</p>
      </div>
    </>
  );
};
