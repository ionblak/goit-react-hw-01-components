import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends-list.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  let color = 'red';
  if (isOnline) {
    color = 'green';
  }
  return (
    <li className={styles.item}>
      <span style={{ backgroundColor: color }} className={styles.status}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <h3 className="name">{name}</h3>
    </li>
  );
};
export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
