import React, { Component } from 'react';
import { toast } from 'react-toastify';
import axios from 'utilities/axios';
import { Row } from 'react-bootstrap';
import ActivityTagsHeader from 'pomodoros/activity_tags/ActivityTagsHeader';
import ActivityTagsList from 'pomodoros/activity_tags/ActivityTagsList';

class ActivityTagsView extends Component {
  state = {
    activityTags: [],
    isLoading: false
  }

  sortBy = (field) => {
    this.setState({
      activityTags: this.state.activityTags.sort((a, b) => a[field].localeCompare(b[field])
      )
    })
  }

  componentDidMount() {
    this.setState({isLoading: true})

    axios({ method:'get', url:'/api/v1/activity_tags' })
      .then( ({data}) => {
        this.setState({isLoading: false})
        const activityTags = data.data.activity_tags;
        this.setState({activityTags})
      })
      .catch( (error) => {
        this.setState({isLoading: false})
      })
  }

  render() {
    return (
      <React.Fragment>
        <ActivityTagsHeader />
        <ActivityTagsList activityTags={this.state.activityTags} sortBy={this.sortBy} isLoading={this.state.isLoading}/>
      </React.Fragment>
    );
  }
}

export default ActivityTagsView;
