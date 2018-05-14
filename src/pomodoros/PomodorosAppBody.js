import React from 'react';
import {Row, Table} from 'react-bootstrap';
import PomodorosListItem from 'pomodoros/PomodorosListItem';

function PomodorosAppBody({pomodoros}) {
  return (
    <Row>
      <Table striped condensed>
        <thead>
          <tr>
            <th>Description</th>
            <th>Start-End Time</th>
            <th>Total Duration</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {
            pomodoros.map ( (pomodoro) =>
                <PomodorosListItem key={pomodoro.id} pomodoro={pomodoro}/>
            )
          }
        </tbody>
      </Table>
    </Row>
  );
}

export default PomodorosAppBody;
