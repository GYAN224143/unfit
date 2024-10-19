import GreaterIcon from "./../assets/profileImages/Greater.svg";

const ActionBar = () => {
  return (
    <div className="action-bar">
      <ul>
        <li>Home</li>
        <img src={GreaterIcon} alt="" />
        <li>User Profile</li>
        <img src={GreaterIcon} alt="" />
        <li>Account Information</li>
      </ul>
    </div>
  );
};

export default ActionBar;
