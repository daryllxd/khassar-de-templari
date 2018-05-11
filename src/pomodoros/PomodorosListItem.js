import React from 'react';

function PomodorosListItem({pomodoro}) {
  return (
    <h1>{pomodoro.description} {pomodoro.duration}</h1>
  );
}

export default PomodorosListItem;
