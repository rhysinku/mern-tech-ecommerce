import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      <section>
        <h3>Category</h3>
        <div className="mt-2">
          <select value={productCategory} onChange={handleProductCategory}>
            <option value="">Select Category</option>
            <option value="computer">computer</option>
            <option value="laptop">laptop</option>
            <option value="console">console</option>
          </select>
        </div>
      </section>
    </>
  );
};
