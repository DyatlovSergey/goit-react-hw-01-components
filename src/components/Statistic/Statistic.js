import s from "./Statistic.module.css";
import propTypes from "prop-types";
export default function Statistic({ label, percent }) {
  return (
    <li className={s.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percent}</span>
    </li>
  );
}

Statistic.poroTypes = {
  label: propTypes.string,
  percent: propTypes.number,
};
