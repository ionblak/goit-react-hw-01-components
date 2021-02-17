import React from 'react';
import TransactionItem from './Transaction-item';
import PropTypes from 'prop-types';
import styles from './Transaction-history.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.tabel}>
      <thead>
        <tr>
          <th className={styles.item}>Type</th>
          <th className={styles.item}>Amount</th>
          <th className={styles.item}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <TransactionItem
            index={index}
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
