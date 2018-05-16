import React from 'react';
import {Row, Table} from 'react-bootstrap';
import ActivityTagsListItem from 'pomodoros/activity_tags/ActivityTagsListItem'

function ActivityTagsList({activityTags}) {
  return (
    <Table striped condensed>
      <thead>
        <tr>
          <th>Name</th>
          <th>Keyboard Shortcut</th>
        </tr>
      </thead>
      <tbody>
        {
          activityTags.map ( (activityTag) =>
              <ActivityTagsListItem key={activityTag.id} activityTag={activityTag}/>
          )
        }
      </tbody>
    </Table>
  );
}

export default ActivityTagsList;

