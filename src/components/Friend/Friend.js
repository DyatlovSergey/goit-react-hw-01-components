import propTypes from "prop-types";
import s from "./Friend.module.css";
export default function Friend({ id, isOnline, avatar, name }) {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  key: propTypes.number,
  avatar: propTypes.string,
  name: propTypes.string,
};
