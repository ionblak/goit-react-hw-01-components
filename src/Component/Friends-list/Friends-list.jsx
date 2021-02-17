import React from 'react';
import FriendListItem from './Friend-list-item';
import PropTypes from 'prop-types';
import styles from './Friends-list.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
