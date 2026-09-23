export default function Dashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>Total GMV: ₹1,50,00,000</div>
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>Total Orders: 1205</div>
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>Active Users: 450</div>
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>Total Vendors: 5</div>
      </div>
      <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1, border: '1px solid #eee', padding: '10px' }}>Revenue Chart</div>
        <div style={{ flex: 1, border: '1px solid #eee', padding: '10px' }}>Orders Bar Chart</div>
        <div style={{ flex: 1, border: '1px solid #eee', padding: '10px' }}>Top Categories Pie Chart</div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>Recent Activity</h2>
        <ul><li>User John registered</li><li>Vendor 2 uploaded new product</li></ul>
      </div>
    </div>
  );
}
