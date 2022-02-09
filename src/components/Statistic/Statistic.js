export default function Statistic({ label, percent }) {
  return (
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percent}</span>
    </li>
  );
}
