import { MiddleCarousel } from "./MiddleCarousel";

export const MiddleComponent = () => {
  return (
    <div className="my-9">
      <section className="mb-7">
        <h2 className="line-fx text-3xl">New Arrival</h2>
      </section>

      <div>
        <MiddleCarousel />
      </div>
    </div>
  );
};
