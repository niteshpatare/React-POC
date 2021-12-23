import { render } from "@testing-library/react";
import React from "react";
import "./Footer.css";
import propTypes from "prop-types";
import { ThemeContext } from "../Home";
class Footer extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <footer>
              {this.props.msg}&nbsp; Theme: {this.context}
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  msg: propTypes.string.isRequired,
};

Footer.defaultProps = {
  msg: "Copyright 2021",
};
export default Footer;
