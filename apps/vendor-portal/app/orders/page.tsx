export default function Orders() {
  return (
    <div>
      <h1>Orders</h1>
      <select><option>All Statuses</option><option>Pending</option><option>Shipped</option></select>
      <table style={{ width: '100%', marginTop: '20px' }}>
        <tr><th>Order ID</th><th>Date</th><th>Status</th><th>Actions</th></tr>
        <tr><td>#ORD-001</td><td>2023-10-01</td><td>Pending</td><td><button>Update Status</button></td></tr>
      </table>
    </div>
  );
}
