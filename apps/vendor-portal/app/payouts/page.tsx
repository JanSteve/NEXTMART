export default function Payouts() {
  return (
    <div>
      <h1>Payouts</h1>
      <div style={{ padding: '20px', border: '1px solid #ccc' }}>Pending Payout: ₹45,000</div>
      <h2>History</h2>
      <table style={{ width: '100%', marginTop: '20px' }}>
        <tr><th>Date</th><th>Amount</th><th>Status</th></tr>
        <tr><td>2023-09-01</td><td>₹1,00,000</td><td>Completed</td></tr>
      </table>
    </div>
  );
}
