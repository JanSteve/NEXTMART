export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex' }}>
          <aside style={{ width: '250px', background: '#f4f4f4', padding: '20px', height: '100vh' }}>
            <h2>NexMart Vendor</h2>
            <nav>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/orders">Orders</a></li>
                <li><a href="/payouts">Payouts</a></li>
                <li><a href="/settings">Settings</a></li>
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
