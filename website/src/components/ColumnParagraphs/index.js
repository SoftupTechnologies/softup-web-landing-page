import React from "react";
import PropTypes from "prop-types";
import { generateContent } from "../helpers";

import "./index.scss";

export const ColumnParagraphs = ({ data }) => {
  return (
    <div className="displayWithGrid">
      <div className="columns">
        {
          data.columns.map((item, index) => {
            return (
              <div 
                key={`${item.title}-${index}`}
                className="column-paragraphs-item"
              >
                <h2 className="column-title">{item.title}</h2>
                <h4 className="column-content">{generateContent(item.content)}</h4>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

ColumnParagraphs.propTypes = {
  data: PropTypes.shape({
    columns: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.arrayOf(PropTypes.shape({})),
    })),
  }),
};
