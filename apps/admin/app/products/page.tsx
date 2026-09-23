export default function Products() {
  return (
    <div>
      <h1>Product Moderation</h1>
      <table style={{ width: '100%', marginTop: '20px' }}>
        <tr><th>Product</th><th>Vendor</th><th>Status</th><th>Actions</th></tr>
        <tr><td>Samsung Galaxy S24</td><td>Tech Solutions</td><td>Pending Review</td><td><button>Approve</button><button>Reject</button></td></tr>
      </table>
    </div>
  );
}
