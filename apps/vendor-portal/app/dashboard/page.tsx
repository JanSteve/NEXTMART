export default function Dashboard() {
  return (
    <div>
      <h1>Vendor Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>Total GMV: ₹1,50,000</div>
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>Orders Today: 12</div>
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>Products Listed: 45</div>
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>Average Rating: 4.6</div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>Revenue Chart</h2>
        <div style={{ height: '200px', background: '#eee' }}>Line chart placeholder</div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>Recent Orders</h2>
        <table><tr><th>ID</th><th>Status</th></tr><tr><td>#123</td><td>Shipped</td></tr></table>
      </div>
    </div>
  );
}
