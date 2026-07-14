export function Navbar() {
  return (
    <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#0056b3', color: '#fff', borderRadius: '4px', marginBottom: '1rem' }}>
      <div className="navbar-brand" style={{ fontWeight: 'bold' }}>Parking System</div>
      <ul className="navbar-links" style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
        <li><a href="#spaces" style={{ color: '#fff', textDecoration: 'none' }}>Spaces</a></li>
        <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
      </ul>
    </nav>
  );
}
