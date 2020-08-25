import React from "react";
import { Image } from "../../image";
import "./client-name.scss";
import PropTypes from "prop-types";

export const ClientName = ({ data }) => {
  return (
    <div className="displayWithGrid">
      <div className="clientNameDiv">
        <div className="headerImage">
          <Image filename={data.iconFileName} />
        </div>
      </div>
    </div>
  );
};

ClientName.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    iconFileName: PropTypes.string,
  }),
};
