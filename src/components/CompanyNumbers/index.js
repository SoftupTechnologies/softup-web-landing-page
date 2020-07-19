import React from "react"
import companyStyles from "./company-numbers.module.css"

const CompanyNumber = ({ number, category }) => {
  return (
    <div className={companyStyles.benchmarkGroup}>
      <div className={companyStyles.benchmarkNumber}>{number}</div>
      <div className={companyStyles.benchmarkCategory}>{category}</div>
    </div>
  )
}

export const CompanyNumbers = () => {
  const companyBenchmark = [
    {
      category: "EMPLOYEES",
      number: "20",
    },
    {
      category: "PROJECTS",
      number: "45",
    },
    {
      category: "CLIENTS",
      number: "30",
    },
  ]
  return (
    <div id="company-numbers" className={companyStyles.companyNumContainer}>
      <div className={companyStyles.companyNumbers}>
        {companyBenchmark.map(({ number, category }, index) => (
          <CompanyNumber key={index} number={number} category={category} />
        ))}
      </div>
    </div>
  )
}
