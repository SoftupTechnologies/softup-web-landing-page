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
  return (
    <div id="expertise" className={expertiseStyles.expertiseContainer}>
      <div className={expertiseStyles.companyNumbers}>
        <CompanyNumber number={"20"} category={"EMPLOYEES"}/>
        <CompanyNumber number={"45"} category={"PROJECTS"}/>
        <CompanyNumber number={"30"} category={"CLIENTS"}/>
      </div>
    </div>
  )
}
