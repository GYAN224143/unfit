import { useState, useEffect } from "react";
import AllFilter from "../components/AllFilter";
import ProductCard from "../components/ProductCard";
import ProductTopBar from "../components/ProductTopBar";

const Product = () => {
  const [filter, setFilter] = useState(false);

  // Handle window resize to update filter state automatically
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1220) {
        setFilter(true); // Automatically set filter to true
      } else {
        setFilter(false); // Set filter to false if window is smaller than 1200px
      }
    };

    // Set the initial filter state on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this runs only on mount/unmount

  const handleFilter = () => {
    setFilter(!filter);
  };

  return (
    <div className="product-wraper">
      <h1 className="product-umart">Umart Store</h1>
      <div className="w-full mt-5 lg:mt-[40px] flex gap-[30px]">
        {filter ? (
          <div className="filter-icons" onClick={handleFilter}>
            Filter
          </div>
        ) : (
          <div className="filter-list-container">
            <AllFilter setFilter={setFilter} />
          </div>
        )}

        <div className="product-list-container">
          <ProductTopBar />
          <div className="product-card-container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
