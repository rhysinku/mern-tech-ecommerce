import BottomCard from "./BottomCard";

export const BottomBox = () => {
  return (
    <div>
      <section className="mb-7">
        <h1 className="line-fx text-3xl">PC Peripherals </h1>
      </section>

      <div className="flex flex-wrap justify-evenly gap-x-2 gap-y-7">
        {Array.from({ length: 8 }, (_, i) => (
          <BottomCard key={i} />
        ))}
      </div>
    </div>
  );
};
