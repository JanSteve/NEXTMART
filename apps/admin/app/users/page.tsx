export default function Users() {
  return (
    <div>
      <h1>Users Management</h1>
      <input type="text" placeholder="Search users..." />
      <table style={{ width: '100%', marginTop: '20px' }}>
        <tr><th>ID</th><th>Name</th><th>Status</th><th>Actions</th></tr>
        <tr><td>USR-1</td><td>Test User 1</td><td>Active</td><td><button>Suspend</button></td></tr>
      </table>
    </div>
  );
}
