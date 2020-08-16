import React from "react";
import "./quick-description.scss";
import PropTypes from "prop-types";
import { generateContent } from "../../helpers";

export const QuickDescription = ({ data }) => {
  return (
    <div className={"quickDescriptionDiv displayWithGrid"}>
      <div className={"title"}>{data.title}</div>
      <div className={"description"}>{generateContent(data.content)}</div>
    </div>
  );
};

QuickDescription.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.object),
  }),
};
