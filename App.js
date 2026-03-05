import React, { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('Checking API...');

  useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch(err => setStatus('API Offline'));
  }, []);

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>SmartPark360 Admin Dashboard</h1>
      <p>Server Status: <strong>{status}</strong></p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px' }}>Total Slots: 45</div>
        <div style={{ border: '1px solid #ccc', padding: '20px' }}>Occupied: 12</div>
        <div style={{ border: '1px solid #ccc', padding: '20px' }}>Revenue: $1,200</div>
      </div>
    </div>
  );
}

export default App;