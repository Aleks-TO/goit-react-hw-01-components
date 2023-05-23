import css from './FriendList.module.css';

export default function FriendListItem({ status, avatar, name, id }) {
  return (
    <li id={id} className={css.item}>
      <span className={status ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
