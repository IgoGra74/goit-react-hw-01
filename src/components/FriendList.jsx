import FriendListItem from "./FriendListItem";
// import css from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <ul>
      {Array.isArray(friends) &&
        friends.map((friend) => (
          <li key={friend.id}>
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
