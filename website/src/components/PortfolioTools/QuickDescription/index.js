import React from "react";
import "./quick-description.scss";
import PropTypes from "prop-types";
import { generateContent } from "../../helpers";

export const QuickDescription = ({ data }) => {
  return (
    <div
      className={
        data.no_padding
          ? "quickDescriptionDiv displayWithGrid no-padding"
          : "quickDescriptionDiv displayWithGrid"
      }
    >
      {data.title && <div className={"title"}>{data.title}</div>}
      <div className={data.no_padding ? "new-description" : "description"}>
        {generateContent(data.content)}
      </div>
    </div>
  );
};

QuickDescription.propTypes = {
  data: PropTypes.shape({
    no_padding: PropTypes.bool,
    title: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.object),
  }),
};
