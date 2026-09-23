export default function Analytics() {
  return (
    <div>
      <h1>Analytics</h1>
      <input type="date" /> to <input type="date" />
      <div style={{ marginTop: '20px' }}>
        <h3>Funnel Analysis</h3>
        <p>Visits: 10,000 -> Add to Cart: 2,000 -> Purchase: 500 (Conversion: 5%)</p>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Top Products</h3>
        <table style={{ width: '100%' }}>
          <tr><th>Product</th><th>Revenue</th></tr>
          <tr><td>Samsung S24 Ultra</td><td>₹10,00,000</td></tr>
        </table>
      </div>
    </div>
  );
}
