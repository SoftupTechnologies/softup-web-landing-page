import React from "react";
import "./quick-facts.scss";
import PropTypes from "prop-types";

export const QuickFacts = ({ data }) => {
  return (
    <div className={"displayWithGrid"}>
      <div className={"quickFactsContainer"}>
        {data.map((item, index) => (
          <div key={index} className={"itemContainer"}>
            <div className={"title"}>{item.title}</div>
            <div className={"content"}>
              {item.type === "fact" ? (
                <div className={"description"}>{item.description}</div>
              ) : (
                item.items.map((word, index) => (
                  <div className={"list"} key={index}>
                    {word}
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

QuickFacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
