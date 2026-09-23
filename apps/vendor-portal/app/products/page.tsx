export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <button style={{ background: '#5B4FE9', color: 'white', padding: '10px' }}>Add Product</button>
      <button style={{ background: '#5B4FE9', color: 'white', padding: '10px', marginLeft: '10px' }}>Bulk Upload CSV</button>
      <table style={{ width: '100%', marginTop: '20px' }}>
        <tr><th>Name</th><th>Status</th><th>Stock</th><th>Price</th><th>Actions</th></tr>
        <tr><td>Sample Product</td><td>Active</td><td>50</td><td>₹999</td><td><button>Edit</button></td></tr>
      </table>
    </div>
  );
}
