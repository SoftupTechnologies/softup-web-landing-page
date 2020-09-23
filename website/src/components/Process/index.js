import { useTranslation } from "react-i18next";
import React from "react";
import PropTypes from "prop-types";
import "./process.scss";
import { MarkdownDisplay } from "../MarkdownDisplay";

export const Process = ({ data }) => {
  const { t } = useTranslation();
  const items = data?.items?.length - 1;

  return (
    <div>
      <div className="displayWithGrid">
        <div className="process-wrapper">
          {data?.items?.map((item, index) => (
            <div className="process" key={index}>
              <div className="process-article">
                <div className="outer-circle">
                  <div className="inner-circle">
                    <div className="second-inner-circle">
                      <div className="third-inner-circle">
                        <span className="process-number">{t(item.title)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="process-article-description">
                  <MarkdownDisplay data={t(item.description)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Process.propTypes = {
  data: PropTypes.object,
};
