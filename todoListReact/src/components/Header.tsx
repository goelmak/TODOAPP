import "../App.css";
import HeaderIcon from "../assets/HeaderIcon.svg";
import PieChart from "./PieChart";

const Header = () => {
  return (
    <div className="parent-div">
      <div className="weather-box">
        <PieChart></PieChart>
      </div>
      <div className="text-element">
        <div>
          <hr className="hr1" />
          <h1>To-DO NOW</h1>
          <hr className="hr2" />
        </div>
        <img src={HeaderIcon} />
      </div>
    </div>
  );
};

export default Header;
