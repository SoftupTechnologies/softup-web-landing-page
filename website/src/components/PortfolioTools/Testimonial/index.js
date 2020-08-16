import React from "react";
import PropTypes from "prop-types";
import "./testimonial.scss";

export const Testimonial = ({ data }) => {
  return (
    <div className={"displayWithGrid"}>
      <div className={"testimonialDiv"}>
        <div className={"quotes quoteUp"}>“</div>
        <div className={"content"}>
          <span>
            <span className={"description"}>{data.content}</span>
            <span className={"author"}> — {data.author}</span>
          </span>
        </div>
        <div className={"quotes"}>”</div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
    author: PropTypes.string,
  }),
};
