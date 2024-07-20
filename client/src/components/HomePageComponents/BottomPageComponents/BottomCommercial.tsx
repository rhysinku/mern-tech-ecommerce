import { BottomBrand } from "./BottomBrand";

export const BottomCommercial = () => {
  return (
    <div>
      <div className="flex min-h-96 items-center justify-center rounded-xl bg-bodyColor px-6 py-12 text-white">
        <div>
          <section className="text-center">
            <h2 className="text-3xl">Best Brands Deal</h2>
            <h3>
              Up To <span className="text-secondary">60%</span> off on brands
            </h3>
          </section>
          <section className="mt-9">
            <BottomBrand />
          </section>
        </div>
      </div>
    </div>
  );
};
