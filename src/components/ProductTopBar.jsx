const ProductTopBar = ({ setSortOrder, selectedCategory }) => {
  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    setSortOrder(selectedValue);
  };

  // Display the category title, default to 'Products' if 'all' is selected
  const categoryDisplayName =
    selectedCategory === "all" ? "Products" : selectedCategory;

  return (
    <div className="top-bar-section ">
      <h3>{categoryDisplayName}</h3> {/* Display selected category */}
      <div className="relative selector">
        <select
          onChange={handleSortChange}
          className="block w-full focus:outline-none"
        >
          <option value="feature">Feature</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default ProductTopBar;
