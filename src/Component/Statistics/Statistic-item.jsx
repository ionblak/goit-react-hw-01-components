import React from "react";
import PropTypes from "prop-types";

const StatisticItem = ({ label, percentage }) => {
  return (
    <>
      <span className="label">{label} </span>
      <span className="percentage">{percentage}%</span>
    </>
  );
};

export default StatisticItem;

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
