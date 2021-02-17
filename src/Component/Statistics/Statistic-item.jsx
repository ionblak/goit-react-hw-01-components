import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const StatisticItem = ({ label, percentage }) => {
  return (
    <li className={styles.item} style={{ backgroundColor: getRandColor() }}>
      <span className="label">{label} </span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

export default StatisticItem;

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function getRandColor() {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = '0' + color;
  }
  return '#' + color;
}
