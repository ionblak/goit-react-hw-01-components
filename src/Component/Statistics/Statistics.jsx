import React from "react";
import PropTypes from "prop-types";
import StatisticItem from "./Statistic-item";

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map((item) => (
          <li className="item" key={item.id}>
            <StatisticItem label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
