import React, { Component } from 'react';
import { Row, Table } from 'react-bootstrap';
import ActivityTagsListItem from 'pomodoros/activity_tags/ActivityTagsListItem'

class ActivityTagsList extends Component {
  render() {
    let { activityTags, sortBy } = this.props;

    return (
      <Table striped condensed>
        <thead>
          <tr>
            <th onClick={sortBy.bind(this, 'name')}>Name</th>
            <th onClick={sortBy.bind(this, 'shortcut')}>Keyboard Shortcut</th>
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
}

export default ActivityTagsList;

