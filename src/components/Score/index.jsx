import React from "react";
import "./styles.scss";

function Score({ scores }) {
  return (
    <div className="score-card">
      <div className="score-panel">
        <div className="user-score">You: {scores.user}</div>
        <div className="computer-score">Computer: {scores.computer}</div>
      </div>
    </div>
  );
}

export default Score;
