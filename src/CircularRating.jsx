import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// CircularRating Component
const CircularRating = ({ rating }) => {
  // Convert rating (from 1-10) to percentage (from 1-100)
  const percentage = (rating / 10) * 100;

  // Determine circle color based on percentage
  const getColor = (percentage) => {
    if (percentage >= 80) return '#4caf50'; // Green
    if (percentage >= 65) return '#ffa500'; // Orange
    return 'red'; // Red
  };

  return (
    <div className="h-10 w-10 hover:scale-125 transition-transform duration-300">
      <CircularProgressbar
        value={percentage}
        text={`${Math.round(percentage)}%`}
        styles={buildStyles({
          pathTransitionDuration: 2, // 2 seconds animation
          textSize: '30px', // Text size
          textColor: '#000', // Black font color
          fontWeight: 'bold', // Bold font
          pathColor: getColor(percentage),
          trailColor: '#d6d6d6', // Grey background circle
          strokeLinecap: 'butt', // Flat ends for the circle
          pathWidth: 10, // Thicker circle border
          trailWidth: 8, // Slightly thinner trail
        })}
      />
    </div>
  );
};

export default CircularRating;
