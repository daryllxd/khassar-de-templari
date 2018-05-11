import React from 'react';
import { Row, PageHeader } from 'react-bootstrap';

function PomodorosAppHeader() {
  return (
    <Row>
      <PageHeader>
        Pomodoros. <small>Trust the process.</small>
      </PageHeader>
    </Row>
  );
}

export default PomodorosAppHeader;
