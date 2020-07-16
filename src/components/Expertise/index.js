import React from "react"
import expertiseStyles from "./expertise.module.css"

const CompanyNumber = ({ number, category }) => {
  return (
    <div className={expertiseStyles.benchmarkGroup}>
      <div className={expertiseStyles.benchmarkNumber}>{number}</div>
      <div className={expertiseStyles.benchmarkCategory}>{category}</div>
    </div>
  )
}

export const Expertise = () => {
  const companyBenchmark = [
    {
      category: "EMPLOYEES",
      number: "20"
    },
    {
      category: "PROJECTS",
      number: "45"
    },
    {
      category: "CLIENTS",
      number: "30"
    }
  ]
  return (
    <div id="expertise" className={expertiseStyles.expertiseContainer}>
      <div className={expertiseStyles.companyNumbers}>
        {companyBenchmark.map(({ number, category }, index) => (
            <CompanyNumber key={index} number={number} category={category}/>
          )
        )}
      </div>
    </div>
  )
}
