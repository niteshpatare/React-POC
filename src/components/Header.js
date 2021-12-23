import "./Header.css";
import wallpaper from "../images/employeelist.png";
import propTypes from "prop-types";
export const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1 className="text-primary">{props.title}</h1>
            <img src={wallpaper} width="100px !important" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  title: propTypes.string.isRequired,
};
