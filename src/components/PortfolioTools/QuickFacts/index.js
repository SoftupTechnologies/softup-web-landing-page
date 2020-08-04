import React from "react"
import "./quick-facts.scss"

// eslint-disable-next-line react/prop-types
export const QuickFacts = ({ data }) => {
  return (
    <div className={"displayWithGrid"}>
      <div className={"quickFactsContainer"}>
        {/* eslint-disable-next-line react/prop-types */}
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
  )
}
