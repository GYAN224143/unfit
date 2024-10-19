import { CiHeart } from "react-icons/ci";
import MassImage from "./../assets/productImage/mass.png";
import AddIcon from "./../assets/productImage/addIcon.png";

const ProductCard = () => {
  return (
    <div className="ProductCard relative">
      <div className="red-off">75%</div>
      <div className="heart">
        <CiHeart color="red" fill="red" size={34} />
      </div>
      <div className="product-image">
        <img src={MassImage} alt="" />
      </div>
      <div className="card-info">
        <p className="description">
          Bolt 100% whey Protien powder | With superfood |PHYCOCYANIN | USA
          Formulationasdfgh dbcguzxcgbn z xZdfgh fg fgh dfrtyui rtyu frtyu fgtyu fgh fgh fgh iuyt rty 9rtyuiuyty uyt rty
        </p>
        <div className="price">
          <h3>₹1,999</h3>
          <p>
            <span>₹2,999</span>(33%off)
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
