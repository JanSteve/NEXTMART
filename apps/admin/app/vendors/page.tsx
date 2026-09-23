export default function Vendors() {
  return (
    <div>
      <h1>Vendors Management</h1>
      <table style={{ width: '100%', marginTop: '20px' }}>
        <tr><th>ID</th><th>Business Name</th><th>KYC Status</th><th>Actions</th></tr>
        <tr><td>VND-1</td><td>Tech Solutions</td><td>Pending</td><td><button>Approve</button><button>Reject</button></td></tr>
      </table>
    </div>
  );
}
