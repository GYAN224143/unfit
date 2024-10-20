import { Link } from "react-router-dom";
import LogoImg from "./../assets/profileImages/Group.png";
import Profile from "./../assets/profileImages/Profile.svg";
import Shopping from "./../assets/profileImages/Shopping.svg";
import Search from "./../assets/profileImages/Search.svg";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="w-full h-full flex justify-between items-center">
          <ul className="flex justify-start items-center gap-[38px]  header-left-part">
            <li>
              <Link to="/">
                <img src={LogoImg} alt="" />
              </Link>
            </li>
            <li className="">
              <Link to="/product">Brands</Link>
            </li>
            <li>
              <Link to="/product">Benefits</Link>
            </li>
          </ul>
          <div className="flex justify-end items-center gap-[25px] ">
            <div className="flex justify-end items-center header-search">
              <img src={Search} alt="" />
              <input type="text" placeholder="Search on unFIT..." />
            </div>
            <Link className="profile">
              <img src={Profile} alt="" />
            </Link>
            <Link className="showping">
              <img src={Shopping} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="header-bar">
        <p>Free Shipping Above ₹400</p>
        <span></span>
        <p>COD Available</p>
      </div>
      <div className="header-menus-bar">
        <Link>Health Supplements</Link>
        <Link>Sports Nutrition</Link>
        <Link>Health Foods & Beverages</Link>
        <Link>Hair, Skin & Nails</Link>
        <Link>Weight Managments</Link>
        <Link>Women’s Health</Link>
        <Link>Kids Nutrition</Link>
        <Link>Ayurvedic & Herble Supplements</Link>
      </div>
    </>
  );
}
