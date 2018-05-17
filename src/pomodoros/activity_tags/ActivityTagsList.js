import React, { Component } from 'react';
import { Row, Table } from 'react-bootstrap';
import ActivityTagsListItem from 'pomodoros/activity_tags/ActivityTagsListItem'

function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props })  {
    if (!isLoading) {
      return (<Component {...props} />);
    }
    else {
      return (<h1>Loading.</h1>);
    }
  }
}

class aActivityTagsList extends Component {
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

const ActivityTagsList = WithLoading(aActivityTagsList);

export default ActivityTagsList;
