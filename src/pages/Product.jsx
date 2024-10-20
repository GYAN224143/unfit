import { useState, useEffect } from "react";
import AllFilter from "../components/AllFilter";
import ProductCard from "../components/ProductCard";
import ProductTopBar from "../components/ProductTopBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(false);

  // Handle window resize to update filter state automatically
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1220) {
        setFilter(true);
      } else {
        setFilter(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this runs only on mount/unmount

  const handleFilter = () => {
    setFilter(!filter);
  };

  // working for api

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [priceRange, setPriceRange] = useState([]); // For handling price range filter

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setLoading(false);
      });
  }, []);

  // Handle Filtering by category and price
  const filterProducts = () => {
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

    // Sort products by price
    updatedProducts.sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });

    setFilteredProducts(updatedProducts);
  };

  useEffect(() => {
    filterProducts();
  }, [category, sortOrder, priceRange, products]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
              setCategory={setCategory}
              setPriceRange={setPriceRange}
            />
          </div>
        )}

        <div className="product-list-container">
          <ProductTopBar setSortOrder={setSortOrder} />
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
