import React from "react";
import PropTypes from "prop-types";
import "./paragraph-and-image.scss";
import { Image } from "../../image";
import classNames from "classnames";
import { generateContent } from "../../helpers";

export const ParagraphAndImage = ({ data }) => {
  let classes = classNames({
    paragraphAndImageDiv: true,
    right: data.imagePosition === "right",
    left: data.imagePosition === "left",
  });

  return (
    <div className={"displayWithGrid"}>
      <div className={classes}>
        <div className={"pImage"}>
          <Image filename={data.imageName} />
        </div>
        <div
          className={
            data.imagePosition === "left" ? "pContentLeft" : "pContentRight"
          }
        >
          <div className={"title"}>{data.title}</div>
          <div className={"content"}>{generateContent(data.content)}</div>
        </div>
      </div>
    </div>
  );
};

ParagraphAndImage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    imageName: PropTypes.string,
    imagePosition: PropTypes.oneOf(["left", "right"]),
    content: PropTypes.arrayOf(PropTypes.object),
  }),
};
