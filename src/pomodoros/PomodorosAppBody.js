import React from 'react';
import {Row} from 'react-bootstrap';
import PomodorosListItem from 'pomodoros/PomodorosListItem';

function PomodorosAppBody({pomodoros}) {
  return (
    <Row>
      {
        pomodoros.map ( (pomodoro) =>
            <PomodorosListItem pomodoro={pomodoro}/>
        )
      }
    </Row>
  );
}

export default PomodorosAppBody;
