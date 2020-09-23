import React from "react";
import PropTypes from "prop-types";
import "./icon-paragraphs.scss";
import { generateContent } from "../helpers";
import { Image } from "../image";

export const IconParagraphs = ({ data }) => {
  return (
    <div className={"displayWithGrid"}>
      <div className={"paragraphsWrapper"}>
        {data.map((item, index) => (
          <div key={index} className={"paragraph"}>
            <div className={"iconDiv"}>
              <Image filename={item.iconFilename} />
            </div>
            <div className={"contentDiv"}>
              <div className={"title"}>{item.title}</div>
              {generateContent(item.content)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

IconParagraphs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      iconPath: PropTypes.string,
      content: PropTypes.array,
    })
  ),
};
