export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex' }}>
          <aside style={{ width: '250px', background: '#333', color: '#fff', padding: '20px', height: '100vh' }}>
            <h2>NexMart Admin</h2>
            <nav>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="/dashboard" style={{color:'#fff'}}>Dashboard</a></li>
                <li><a href="/users" style={{color:'#fff'}}>Users</a></li>
                <li><a href="/vendors" style={{color:'#fff'}}>Vendors</a></li>
                <li><a href="/orders" style={{color:'#fff'}}>Orders</a></li>
                <li><a href="/products" style={{color:'#fff'}}>Products</a></li>
                <li><a href="/cms" style={{color:'#fff'}}>CMS</a></li>
                <li><a href="/analytics" style={{color:'#fff'}}>Analytics</a></li>
              </ul>
            </nav>
          </aside>
          <main style={{ flex: 1, padding: '20px' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
