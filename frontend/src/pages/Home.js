import React from 'react';
import './Home.css';

function Home() {
  const workshops = [
    { id: 1, title: 'Python Workshop', date: 'April 15, 2026', seats: 30, available: 12 },
    { id: 2, title: 'Scilab Workshop', date: 'April 20, 2026', seats: 25, available: 8 },
    { id: 3, title: 'Django Workshop', date: 'April 25, 2026', seats: 20, available: 15 },
  ];

  return (
    <div className="home-container">
      <div className="hero">
        <h1>FOSSEE Workshops</h1>
        <p>Learn open source tools with experts from IIT Bombay</p>
        <button className="btn-primary">Explore Workshops</button>
      </div>
      <div className="workshops-section">
        <h2>Upcoming Workshops</h2>
        <div className="workshops-grid">
          {workshops.map((w) => (
            <div className="workshop-card" key={w.id}>
              <h3>{w.title}</h3>
              <p>📅 {w.date}</p>
              <p>🪑 {w.available} seats available out of {w.seats}</p>
              <button className="btn-secondary">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;