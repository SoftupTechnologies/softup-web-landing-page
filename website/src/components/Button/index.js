import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

export const Button = ({ data }) => {
  return (
    <form style={{ marginBottom: 0 }}>
      {data.align === "center" ? (
        <div className="displayWithGrid">
          <div className="buttonDiv align-center">
            <a href={data.link}>{data.value}</a>
          </div>
        </div>
      ) : (
        <div className="buttonDiv">
          <a href={data.link}>{data.value}</a>
        </div>
      )}
    </form>
  );
};

Button.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.string,
    link: PropTypes.string,
    align: PropTypes.string,
  }),
};
