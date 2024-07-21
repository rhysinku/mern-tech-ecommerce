import { ShoppingFilter } from "./ShoppingFilter";

export const ShoppingAside: React.FC = () => {
  return (
    <div className="w-full rounded-sm bg-slate-50 px-3 py-9">
      <h1 className="line-fx text-3xl">Filter</h1>
      <div className="mt-6">
        <ShoppingFilter />
      </div>
    </div>
  );
};
