import React from 'react';
import './Statistics.css';

function Statistics() {
  const stats = [
    { label: 'Total Workshops', value: '120+' },
    { label: 'Students Trained', value: '5000+' },
    { label: 'Colleges Reached', value: '200+' },
    { label: 'States Covered', value: '25+' },
  ];

  return (
    <div className="statistics-container">
      <div className="stats-hero">
        <h1>Workshop Statistics</h1>
        <p>Our impact across India</p>
      </div>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistics;