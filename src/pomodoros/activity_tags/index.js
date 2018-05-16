import React, { Component } from 'react';
import axios from 'utilities/axios';
import { Row } from 'react-bootstrap';
import ActivityTagsHeader from 'pomodoros/activity_tags/ActivityTagsHeader';
import ActivityTagsList from 'pomodoros/activity_tags/ActivityTagsList';

class ActivityTagsView extends Component {
  state = {
    activityTags: []
  }

  sortBy = (field) => {
    this.setState({
      activityTags: this.state.activityTags.sort((a, b) => a[field].localeCompare(b[field])
      )
    })
  }

  componentDidMount() {
    axios({ method:'get', url:'/api/v1/activity_tags' })
      .then( (res) => {
        const activityTags = res.data.data.activity_tags;
        this.setState({activityTags})
      })
  }

  render() {
    return (
      <React.Fragment>
        <ActivityTagsHeader />
        <ActivityTagsList activityTags={this.state.activityTags} sortBy={this.sortBy}/>
      </React.Fragment>
    );
  }
}

export default ActivityTagsView;
