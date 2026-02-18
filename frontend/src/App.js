import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>🚩 CTF Challenge Platform</h1>
        <div className="user-info">
          <p>Welcome, <strong>{user.username}</strong>!</p>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="challenges-section">
          <h2>Available Challenges</h2>
          <div className="challenges-grid">
            <div className="challenge-card">
              <h3>Challenge 1: Basic Web</h3>
              <p>Difficulty: <span className="easy">Easy</span></p>
              <p>Find the hidden flag on the website.</p>
              <button className="solve-btn">Solve Challenge</button>
            </div>

            <div className="challenge-card">
              <h3>Challenge 2: Cryptography</h3>
              <p>Difficulty: <span className="medium">Medium</span></p>
              <p>Decrypt the message.</p>
              <button className="solve-btn">Solve Challenge</button>
            </div>

            <div className="challenge-card">
              <h3>Challenge 3: Advanced Hacking</h3>
              <p>Difficulty: <span className="hard">Hard</span></p>
              <p>Penetration testing challenge.</p>
              <button className="solve-btn">Solve Challenge</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;