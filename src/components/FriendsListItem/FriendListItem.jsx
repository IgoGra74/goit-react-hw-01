import css from './FriendsListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img className={css.image} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </>
  );
};

export default FriendListItem;
