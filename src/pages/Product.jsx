import AllFilter from "../components/AllFilter";
import ProductCard from "../components/ProductCard";
import ProductTopBar from "../components/ProductTopBar";

const Product = () => {
  return (
    <div className="product-wraper">
      <h1 className="product-umart">Umart Store</h1>
      <div className="w-full mt-[40px] flex gap-[30px]">
        <div className="filter-list-container">
          <AllFilter />
        </div>
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
