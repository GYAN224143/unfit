import { CiHeart } from "react-icons/ci";
import MassImage from "./../assets/productImage/mass.png";
import AddIcon from "./../assets/productImage/addIcon.png";

const ProductCard = ({ product }) => {
  return (
    <div className="ProductCard relative">
      <div className="red-off">75%</div>
      <div className="heart">
        <CiHeart color="red" fill="red" size={34} />
      </div>
      <div className="product-image">
        <img src={product.image} alt="" />
      </div>
      <div className="card-info">
        <p className="description">{product.description}</p>
        <div className="price">
          <h3>{product.price}</h3>
          <p>
            <span>₹2,999</span>(33%off),
            <span>Ratting :</span>
            {product.rating.rate}
          </p>
        </div>
        <button>
          <img src={AddIcon} alt="" />
          <p>Add To Cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
