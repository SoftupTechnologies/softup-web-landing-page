import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./slide-links.scss";
import { Link } from "gatsby";

import { BlogContext } from "../../../context";

export const SlideLinks = ({ data }) => {
  const posts = useContext(BlogContext);

  return (
    <div className={"slideLinksDiv"}>
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <Link key={index} to={item.link} className={"slideItemLink"}>
            {item.name}
            {item.name ? <span className={"arrow"}>→</span> : null}
          </Link>
        ))
      ) : (
        <React.Fragment>
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              className={"slideItemLink"}
              target="_blank"
              rel="noreferrer"
            >
              {post.title.toUpperCase()}
              {post.title ? <span className={"arrow"}>→</span> : null}
            </a>
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

SlideLinks.propTypes = {
  data: PropTypes.array,
};
