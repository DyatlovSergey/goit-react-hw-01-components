import Statistic from "./Statistic";
import propTypes from "prop-types";
import s from "./Statistic.module.css";
export default function StatisticList({ items, title }) {
  return (
    <section className={s.statistic}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={s.statisticItems}>
        {items.map((item) => (
          <Statistic
            key={item.id}
            label={item.label}
            percent={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

StatisticList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({ id: propTypes.string.isRequired })
  ),
};
