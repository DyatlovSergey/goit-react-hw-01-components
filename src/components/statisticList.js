import Statistic from "./Statistic";
import propTypes from "prop-types";
export default function StatisticList({ title, items }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul>
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
