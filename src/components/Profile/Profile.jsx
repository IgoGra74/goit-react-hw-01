import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={css.cardUser}>
      <div className={css.item}>
        <img className={css.image} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.statsLi}>
          <span className={css.title}>Followers</span>
          <span className={css.value}>{followers}</span>
        </li>
        <li className={css.statsLi}>
          <span className={css.title}>Views</span>
          <span className={css.value}>{views}</span>
        </li>
        <li className={css.statsLi}>
          <span className={css.title}>Likes</span>
          <span className={css.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
