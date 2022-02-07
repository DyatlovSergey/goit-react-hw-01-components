import Statistic from "./Statistic";

export default function StatisticList({ items }) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      <ul>
        {items.map((item) => (
          <Statistic label={item.label} percent={item.percentage} />
        ))}
      </ul>
    </section>
  );
}
