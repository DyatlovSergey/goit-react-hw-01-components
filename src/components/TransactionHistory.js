import propTypes from "prop-types";
export default function TransactionHistory({ items }) {
  return (
    <div>
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {items.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  type: propTypes.string,
  amount: propTypes.number,
  currency: propTypes.string,
};