import s from "./Friend.module.css";
export default function Friend({ avatar, name }) {
  return (
    <li className={s.item}>
      <span className="status"></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
