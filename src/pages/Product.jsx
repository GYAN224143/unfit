import { useState, useEffect, useCallback } from "react";
import AllFilter from "../components/AllFilter";
import ProductCard from "../components/ProductCard";
import ProductTopBar from "../components/ProductTopBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import debounce from "lodash.debounce"; // Add lodash.debounce for performance

const Product = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(false);

  // States for product data and filtering
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Track errors
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("abc"); // Default to "abc" for no sorting
  const [priceRange, setPriceRange] = useState([]); // For handling price range filter
  const [selectedRating, setSelectedRating] = useState(0); // For handling rating filter

  // Handle window resize to update filter state automatically
  useEffect(() => {
    const handleResize = () => {
      setFilter(window.innerWidth < 1220);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data); // Initially show all products
      } catch (err) {
        console.error("Error fetching data", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Debounce the filter function to reduce performance impact
  const filterProducts = useCallback(
    debounce(() => {
      let updatedProducts = [...products];

      // Filter by category
      if (category !== "all") {
        updatedProducts = updatedProducts.filter(
          (product) => product.category === category
        );
      }

      // Filter by price range
      if (priceRange.length > 0) {
        updatedProducts = updatedProducts.filter((product) => {
          return priceRange.some(
            (range) => product.price >= range.min && product.price <= range.max
          );
        });
      }

      // Filter by rating
      if (selectedRating > 0) {
        updatedProducts = updatedProducts.filter(
          (product) => product.rating.rate >= selectedRating
        );
      }

      // Sort products based on the selected sortOrder
      if (sortOrder === "asc") {
        updatedProducts.sort((a, b) => a.price - b.price); // Ascending price
      } else if (sortOrder === "desc") {
        updatedProducts.sort((a, b) => b.price - a.price); // Descending price
      }

      setFilteredProducts(updatedProducts); // Update filtered products
    }, 300), // 300ms debounce
    [category, sortOrder, priceRange, selectedRating, products]
  );

  // Call the filter function whenever relevant state changes
  useEffect(() => {
    filterProducts();
  }, [category, sortOrder, priceRange, selectedRating, products]);

  if (loading) {
    return <div>Loading...</div>; // You can add a spinner here for better UX
  }

  if (error) {
    return <div>{error}</div>; // Display error if fetching fails
  }

  const handleFilter = () => {
    setFilter(!filter);
  };

  return (
    <div className="product-wraper">
      <h1 className="product-umart" onClick={() => navigate("/")}>
        Umart Store
      </h1>
      <div className="w-full mt-5 lg:mt-[40px] flex gap-[30px]">
        {filter ? (
          <div className="filter-icons" onClick={handleFilter}>
            Filter
          </div>
        ) : (
          <div className="filter-list-container">
            <AllFilter
              setFilter={setFilter}
              filterClose={filter}
              setCategory={setCategory}
              setPriceRange={setPriceRange}
              setSelectedRating={setSelectedRating}
            />
          </div>
        )}

        <div className="product-list-container">
          <ProductTopBar
            setSortOrder={setSortOrder}
            selectedCategory={category}
          />
          <div className="product-card-container">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
