import FriendListItem from '../FriendsListItem/FriendListItem';

import css from './FriendsList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {Array.isArray(friends) &&
        friends.map(friend => (
          <li className={css.item} key={friend.id}>
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
