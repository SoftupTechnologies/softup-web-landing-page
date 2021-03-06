import React from "react";
import { Image } from "../../image";
import "./header-image.scss";
import PropTypes from "prop-types";

export const HeaderImage = ({ data }) => {
  return (
    <div className="headerImage">
      <Image filename={data.imageFileName} />
    </div>
  );
};

HeaderImage.propTypes = {
  data: PropTypes.shape({
    imageFileName: PropTypes.string,
  }),
};
