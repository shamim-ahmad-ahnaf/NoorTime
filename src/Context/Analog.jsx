// src/components/AnalogClock.jsx
import React, { useEffect, useState } from 'react';

function AnalogClock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const second = date.getSeconds() * 6;
  const minute = date.getMinutes() * 6 + date.getSeconds() * 0.1;
  const hour = ((date.getHours() % 12) / 12) * 360 + date.getMinutes() * 0.5;

  return (
    <div className="w-24 h-24 rounded-full border-2 border-green-500 relative mx-auto mt-2 shadow">
      <div
        className="absolute w-0.5 h-8 bg-green-600 top-1/2 left-1/2 origin-bottom -translate-x-1/2 -translate-y-full"
        style={{ transform: `rotate(${hour}deg)` }}
      />
      <div
        className="absolute w-0.5 h-10 bg-green-500 top-1/2 left-1/2 origin-bottom -translate-x-1/2 -translate-y-full"
        style={{ transform: `rotate(${minute}deg)` }}
      />
      <div
        className="absolute w-0.5 h-11 bg-red-500 top-1/2 left-1/2 origin-bottom -translate-x-1/2 -translate-y-full"
        style={{ transform: `rotate(${second}deg)` }}
      />
      <div className="absolute w-2 h-2 bg-green-600 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow" />
    </div>
  );
}

export default AnalogClock;
