import PropTypes from "prop-types";
const CoupanCard = ({ image, title }) => {
  return (
    <div className="coupan-card">
      <img src={image} alt="" />
      <h2>{title}</h2>
    </div>
  );
};

CoupanCard.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
};

export default CoupanCard;
