import { useTranslation } from "react-i18next"
import React from "react"
import PropTypes from "prop-types"
import "./process.scss"

export const Process = ({ data }) => {
  const { t } = useTranslation()
  const items = data?.items.length - 1

  return (
    <div>
      <hr className="process-hr" />
      <div className="displayWithGrid">
        <div className="process-wrapper">
          <h1 className="process-title">{t(data.title)}</h1>
          {data?.items.map((item, index) => (
            <div className="process" key={index}>
              {index !== items && <div className="process-center-line"></div>}
              <div className="article">
                {index % 2 === 0 ? (
                  <>
                    <div className="title right">
                      <p>{t(item.title)}</p>
                    </div>
                    <div className="description">
                      <p>{t(item.description)}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="description">
                      <p>{t(item.description)}</p>
                    </div>
                    <div className="title left">
                      <p>{t(item.title)}</p>
                    </div>
                  </>
                )}
                <div className="outer-circle">
                  <div className="inner-circle">
                    <div className="second-inner-circle">
                      <div className="third-inner-circle">
                        <span className="process-number">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Process.propTypes = {
  data: PropTypes.object,
}
