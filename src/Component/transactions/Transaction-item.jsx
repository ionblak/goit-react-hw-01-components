import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction-history.module.css';

const TransactionItem = ({ index, type, amount, currency }) => {
  return (
    <tr className={index % 2 ? styles.first : styles.second}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionItem;

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
