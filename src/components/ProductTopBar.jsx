const ProductTopBar = ({ setSortOrder }) => {
  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    setSortOrder(selectedValue);
  };
  return (
    <div className="top-bar-section ">
      <h3>Multivitamins</h3>
      <div className="relative  selector">
        <select
          onChange={handleSortChange}
          className="block w-full focus:outline-none "
        >
          <option>Feature</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default ProductTopBar;
