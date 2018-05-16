import React from 'react';
import { Row, Tabs, Tab } from 'react-bootstrap';
import PomodorosAppBody from 'pomodoros/PomodorosAppBody';
import ActivityTagsView from 'pomodoros/activity_tags';

function PomodorosTabs({pomodoros}) {
  return (
    <Row>
    <Tabs defaultActiveKey={2} id="pomodoros-tab">
      <Tab eventKey={1} title="Pomodoros">
        <PomodorosAppBody pomodoros={pomodoros} />
      </Tab>
      <Tab eventKey={2} title="Activity Tags">
        <ActivityTagsView />
      </Tab>
    </Tabs>
  </Row>
  );
}

export default PomodorosTabs;
