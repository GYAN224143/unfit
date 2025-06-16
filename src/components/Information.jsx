import CoinImg from "./../assets/profileImages/coinImg.png";
import Coin from "./../assets/profileImages/Coin.png";
import Wallet from "./../assets/profileImages/Wallet.png";
// import Ballence from "./../assets/profileImages/ballence.svg";
import Ballence from "../assets/profileImages/Ballence.svg";

import Layer from "./../assets/profileImages/Layer.svg";
import CoupanCard from "./CoupanCard";
import UCoin from "./../assets/profileImages/UCoin.png";
import Coupan from "./../assets/profileImages/Coupan.png";
import Store from "./../assets/profileImages/Store.png";
import Bazar from "./../assets/profileImages/Bazar.png";
import SimpleSlider from "./SimpleSlider";

const Information = () => {
  return (
    <div className="information">
      <div className="information-section">
        <div className="coin-shop">
          <div className="left-part">
            <h2>Coin Shop</h2>
            <img src={CoinImg} alt="" />
          </div>
          <div className="right-part">
            <ul className="info">
              <li>
                <div className="wallet">
                  <img src={Wallet} alt="" />
                </div>
                <p>
                  Wallet Balance : <span> ₹ 10,000</span>
                </p>
              </li>
              <li>
                <div className="wallet">
                  <img src={Ballence} alt="" />
                </div>
                <p>
                  Wallet Balance :{" "}
                  <span>
                    <img src={Layer} alt="" />
                    1000
                  </span>
                </p>
              </li>
            </ul>
            <img src={Coin} alt="" className="coin-img" />
          </div>
        </div>
        <div className="offers-section">
          <CoupanCard image={UCoin} title={"Reward Store"} />
          <CoupanCard image={Coupan} title={"Coupons"} />
          <CoupanCard image={Store} title={"Coin Mega Store"} />
          <CoupanCard image={Bazar} title={"Loot Bazar"} />
        </div>
        <div className="slider-section">
          <SimpleSlider />
        </div>
      </div>
    </div>
  );
};

export default Information;
