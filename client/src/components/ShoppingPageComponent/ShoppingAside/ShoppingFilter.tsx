import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productCategoryJson from "../../../placeholderJson/productCategory.json";
export const ShoppingFilter = () => {
  const [productCategory, setProductCategory] = useState<string>("");
  const navigate = useNavigate();

  const handleProductCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setProductCategory(selectedCategory);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams();
    if (productCategory) {
      searchParams.set("category", productCategory);
    } else {
      searchParams.delete("category");
    }
    navigate(`?${searchParams.toString()}`, { replace: true });
  }, [productCategory, navigate]);

  console.log(productCategoryJson);

  return (
    <>
      <section>
        <h3>Category</h3>
        <div className="mt-2">
          <div className="w-full">
            <select
              className="w-full rounded-sm px-2 py-2 text-base"
              value={productCategory}
              onChange={handleProductCategory}
            >
              {/* {productCategory.map((category, index) => 
              
              <option>

              </option>
              
              )} */}
              <option value="">Select Category</option>
              <option value="computer">Computer</option>
              <option value="laptop">Laptop</option>
              <option value="console">Console</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};
