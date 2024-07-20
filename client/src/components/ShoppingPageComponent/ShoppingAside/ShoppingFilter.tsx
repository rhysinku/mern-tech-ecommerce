const category = ["Computers", "Laptops", "Consoles", "Accessories"];

function ShoppingFilter() {
  return (
    <section>
      <h3>Category</h3>
      <div className="mt-2">
        <form action="">
          {category.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              <input type="checkbox" />
              <label>{item}</label>
            </div>
          ))}
        </form>
      </div>
    </section>
  );
}

export default ShoppingFilter;
