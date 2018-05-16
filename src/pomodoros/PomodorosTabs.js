import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import PomodorosAppBody from 'pomodoros/PomodorosAppBody';
import ActivityTagsBody from 'pomodoros/activity_tags/ActivityTagsBody';

function PomodorosTabs({pomodoros}) {
  return (
    <Tabs defaultActiveKey={1} id="pomodoros-tab">
      <Tab eventKey={1} title="Pomodoros">
        <PomodorosAppBody pomodoros={pomodoros} />
      </Tab>
      <Tab eventKey={2} title="Activity Tags">
        <ActivityTagsBody />
      </Tab>
    </Tabs>
  );
}

export default PomodorosTabs;
