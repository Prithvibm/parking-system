export function ParkingStats() {
  const stats = { total: 120, available: 45, occupied: 75 };

  return (
    <div className="parking-stats" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
      <div style={{ flex: 1, padding: '1rem', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '4px', textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 0.5rem' }}>Total Slots</h4>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stats.total}</span>
      </div>
      <div style={{ flex: 1, padding: '1rem', backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '4px', textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 0.5rem', color: '#155724' }}>Available Slots</h4>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#155724' }}>{stats.available}</span>
      </div>
      <div style={{ flex: 1, padding: '1rem', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '4px', textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 0.5rem', color: '#721c24' }}>Occupied Slots</h4>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#721c24' }}>{stats.occupied}</span>
      </div>
    </div>
  );
}
