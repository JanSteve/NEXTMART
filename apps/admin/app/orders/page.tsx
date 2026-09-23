export default function Orders() {
  return (
    <div>
      <h1>All Orders</h1>
      <select><option>Filter by Status</option></select>
      <table style={{ width: '100%', marginTop: '20px' }}>
        <tr><th>Order ID</th><th>Vendor</th><th>Total</th><th>Actions</th></tr>
        <tr><td>ORD-1001</td><td>Tech Solutions</td><td>₹15,000</td><td><button>View Details</button></td></tr>
      </table>
    </div>
  );
}
