import React from "react";
import PropTypes from "prop-types";
import "./slide-links.scss";
import { Link } from "gatsby";
import { getMediumArticles } from "../../queries";
import { Button } from "../../Button";

export const SlideLinks = ({ data }) => {
  const { allMediumPost } = getMediumArticles();

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
          {allMediumPost.edges.map(({ node }, index) => (
            <Link
              key={index}
              to={`https://medium.com/softup-technologies/${node.uniqueSlug}`}
              className={"slideItemLink"}
            >
              {node.title.toUpperCase()}
              {node.title ? <span className={"arrow"}>→</span> : null}
            </Link>
          ))}
          <Button
            data={{
              link: "https://medium.com/softup-technologies/",
              value: "VIEW ALL POSTS"
            }}
          />
        </React.Fragment>
      )}
    </div>
  );
};

SlideLinks.propTypes = {
  data: PropTypes.array,
};
