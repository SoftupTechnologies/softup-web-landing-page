import React from "react"

export const QuickFacts = ({ data }) => {
  return data.map((item, index) => <div key={index}>{item.title}</div>)
}
