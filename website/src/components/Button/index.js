import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

export const Button = ({ data }) => {
  let newTabProps = {};

  if (data.openInNewPage) {
    newTabProps = {
      target: "_blank",
      rel: "noreferrer",
    };
  }

  return (
    <form style={{ marginBottom: 0 }}>
      {data.align === "center" ? (
        <div className="displayWithGrid">
          <div className="buttonDiv align-center">
            <a href={data.link} {...newTabProps}>
              {data.value}
            </a>
          </div>
        </div>
      ) : (
        <div className="buttonDiv">
          <a href={data.link} {...newTabProps}>
            {data.value}
          </a>
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
    openInNewPage: PropTypes.bool,
  }),
};
