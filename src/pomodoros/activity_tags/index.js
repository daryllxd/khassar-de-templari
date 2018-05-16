import React, { Component } from 'react';
import axios from 'utilities/axios';
import { Row } from 'react-bootstrap';
import ActivityTagsHeader from 'pomodoros/activity_tags/ActivityTagsHeader';
import ActivityTagsList from 'pomodoros/activity_tags/ActivityTagsList';

class ActivityTagsView extends Component {
  state = {
    activity_tags: []
  }

  componentDidMount() {
    axios({ method:'get', url:'/api/v1/activity_tags' })
      .then( (res) => {
        const activity_tags = res.data.data.activity_tags;
        this.setState({activity_tags})
      })
  }

  render() {
    return (
      <React.Fragment>
        <ActivityTagsHeader />
        <ActivityTagsList activityTags={this.state.activity_tags} />
      </React.Fragment>
    );
  }
}

export default ActivityTagsView;
