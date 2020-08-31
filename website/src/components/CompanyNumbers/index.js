import React from "react";
import "./company-numbers.scss";
import PropTypes from "prop-types";

const CompanyNumber = ({ number, category }) => {
  return (
    <div className="benchmarkGroup">
      <div className="benchmarkNumber">{number}</div>
      <div className="benchmarkCategory">{category}</div>
    </div>
  );
};

export const CompanyNumbers = () => {
  const companyBenchmark = [
    {
      category: "makers",
      number: "20",
    },
    {
      category: "projects",
      number: "45",
    },
    {
      category: "clients",
      number: "30",
    },
  ];
  return (
    <div id="company-numbers" className="companyNumContainer">
      <div className="companyNumbers">
        {companyBenchmark.map(({ number, category }, index) => (
          <CompanyNumber key={index} number={number} category={category} />
        ))}
      </div>
    </div>
  );
};

CompanyNumber.propTypes = {
  number: PropTypes.string,
  category: PropTypes.string,
};

// Test commit!
