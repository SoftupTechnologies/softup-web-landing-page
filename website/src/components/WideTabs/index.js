import { useTranslation } from "react-i18next";
import React from "react";
import classNames from "classnames";
import { breakLongWords, generateContent } from "../helpers";
import PropTypes from "prop-types";
import "./wide-tabs.scss";

const TabContent = ({ itemToBeRendered }) => {
  return (
    // <div className={"displayWithGrid"}>
    <div className={"tabContent"} key={Math.random()}>
      {generateContent(itemToBeRendered?.content)}
    </div>
    // </div>
  );
};

export const WideTabs = ({ data }) => {
  const { t } = useTranslation();
  let locationHash;
  if (typeof window !== "undefined") {
    locationHash = window.location.hash;
  } else {
    return null;
  }
  const windowLocHash =
    locationHash.slice(1, locationHash.length) || data[0].slug;

  const itemToBeRendered = data.find(item => item.slug === windowLocHash);
  const tabTitles = (
    <div className="tabTitlesContainer">
      {/* <div className={"displayWithGrid"}> */}
      <div className="tabTitles" id={itemToBeRendered?.slug}>
        {data.map((item, index) => {
          let classes = classNames({
            tabName: true,
            enabledTitle: item.slug === windowLocHash,
          });
          return (
            <div
              onClick={() => {
                window.location.hash = "#" + item.slug;
              }}
              key={index}
              className={classes}
            >
              {breakLongWords(t(item.tabName))}
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );

  return (
    <div className={"wideTabsDiv"}>
      {tabTitles}
      <TabContent itemToBeRendered={itemToBeRendered} />
    </div>
  );
};

TabContent.propTypes = {
  itemToBeRendered: PropTypes.object,
};

WideTabs.propTypes = {
  data: PropTypes.array,
};
