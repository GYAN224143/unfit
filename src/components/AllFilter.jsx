import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const AllFilter = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openRating, setOpenRating] = useState(false);

  const toggleCategory = () => setOpenCategory(!openCategory);
  const togglePrice = () => setOpenPrice(!openPrice);
  const toggleRating = () => setOpenRating(!openRating);
  return (
    <div className=" w-full">
      {/* Category Accordion */}
      <div className="filter-container">
        <button onClick={toggleCategory} className="filter-header">
          <span>Category</span>
          <span>{openCategory ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </button>
        {openCategory && (
          <div className="categary">
            <div className="categary-item">Multivitamin</div>
            <div className="categary-item">Women Supplements</div>
            <div className="categary-item">Omega 3 & Fish Oil</div>
            <div className="categary-item">Calcium Supplements</div>
            <a href="#" className="see-all">
              See all
            </a>
          </div>
        )}
      </div>

      {/* Price Accordion */}
      <div className="filter-container mt-3">
        <button onClick={togglePrice} className="filter-header">
          <span>Price</span>
          <span>{openPrice ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </button>
        {openPrice && (
          <div className="filter-price">
            <div className="filter-price-section">
              <input type="checkbox" id="price1" />
              <label htmlFor="price1">₹0 - ₹1000</label>
            </div>
            <div className="filter-price-section">
              <input type="checkbox" id="price2" />
              <label htmlFor="price2">₹1000 - ₹2000</label>
            </div>
            <div className="filter-price-section">
              <input type="checkbox" id="price3" />
              <label htmlFor="price3">₹2000 - ₹3000</label>
            </div>
            <div className="filter-price-section">
              <input type="checkbox" id="price4" />
              <label htmlFor="price4">₹3000 - ₹4000</label>
            </div>
            <div className="filter-price-section">
              <input type="checkbox" id="price5" />
              <label htmlFor="price5">₹4000 - ₹5000</label>
            </div>
            <a href="#" className="see-all">
              See all
            </a>
          </div>
        )}
      </div>

      {/* Rating Accordion */}
      <div className="filter-container mt-3">
        <button onClick={toggleRating} className="filter-header">
          <span>Rating</span>
          <span>{openRating ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </button>
        {openRating && (
          <div className="filter-price">
            <div className="filter-price-section">
              <input type="checkbox" id="rating4" className="mr-1" />
              <label htmlFor="rating4 " className="flex gap-[6px] items-center">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon /> & Up
              </label>
            </div>
            <div className="filter-price-section">
              <input type="checkbox" id="rating3" className="mr-1" />
              <label htmlFor="rating3" className="flex gap-[6px] items-center">
                <StarIcon />
                <StarIcon />
                <StarIcon /> & Up
              </label>
            </div>
            <div className="filter-price-section">
              <input type="checkbox" id="rating2" className="mr-1" />
              <label htmlFor="rating2" className="flex gap-[6px] items-center">
                <StarIcon />
                <StarIcon /> & Up
              </label>
            </div>
            <div className="filter-price-section">
              <input type="checkbox" id="rating1" className="mr-1" />
              <label htmlFor="rating1" className="flex gap-[6px] items-center">
                <StarIcon /> & Up
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllFilter;

export const StarIcon = () => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9321 9.9334C13.7163 10.1426 13.6171 10.4451 13.6663 10.7417L14.4071 14.8417C14.4696 15.1892 14.3229 15.5409 14.0321 15.7417C13.7471 15.9501 13.3679 15.9751 13.0571 15.8084L9.36628 13.8834C9.23794 13.8151 9.09544 13.7784 8.94961 13.7742H8.72378C8.64544 13.7859 8.56878 13.8109 8.49878 13.8492L4.80711 15.7834C4.62461 15.8751 4.41794 15.9076 4.21545 15.8751C3.72211 15.7817 3.39294 15.3117 3.47378 14.8159L4.21545 10.7159C4.26461 10.4167 4.16544 10.1126 3.94961 9.90007L0.940445 6.9834C0.688778 6.73924 0.601278 6.37257 0.716278 6.04174C0.827945 5.71174 1.11294 5.4709 1.45711 5.41674L5.59878 4.8159C5.91378 4.7834 6.19044 4.59174 6.33211 4.3084L8.15711 0.566738C8.20044 0.483405 8.25628 0.406738 8.32378 0.341738L8.39878 0.283405C8.43794 0.240071 8.48294 0.204238 8.53294 0.175071L8.62378 0.141738L8.76544 0.0834045H9.11628C9.42961 0.115905 9.70544 0.303405 9.84961 0.583405L11.6988 4.3084C11.8321 4.5809 12.0913 4.77007 12.3904 4.8159L16.5321 5.41674C16.8821 5.46674 17.1746 5.7084 17.2904 6.04174C17.3996 6.3759 17.3054 6.74257 17.0488 6.9834L13.9321 9.9334Z"
        fill="#FF8F27"
      />
    </svg>
  );
};
