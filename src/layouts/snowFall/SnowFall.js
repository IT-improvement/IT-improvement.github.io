import React from 'react'
import './SnowFall.css'
export default function SnowFall() {
    const snowflakes = Array.from({ length: 50 });
  
    return (
      <div className="snowfall-container">
        {snowflakes.map((_, index) => (
          <div
            key={index}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
    );
}
