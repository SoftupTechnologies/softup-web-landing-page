import React from "react";
import PropTypes from "prop-types";


import { Image } from "../image";
import "./index.scss";

export const LogosSection = ({ data }) => {
  return (
    <section className="logos-section-container">
      {
        data.map((item, index) => {
          return (
            <a 
              key={`${item.name}-${index}`}
              href={item.url} 
              target="_blank" 
              rel="noreferrer"
              className="item-wrapper"
            >
              <Image filename={item.logo} />
            </a>
          );
        })
      }
    </section>
  );
};

LogosSection.propTypes = {
  data: PropTypes.array,
};
