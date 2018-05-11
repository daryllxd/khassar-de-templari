import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import PomodorosAppHeader from 'pomodoros/PomodorosAppHeader';
import PomodorosAppBody from 'pomodoros/PomodorosAppBody';
import axios from 'utilities/axios';

export default class PomodorosApp extends Component {
  state = {
    pomodoros: []
  }

  componentDidMount() {
    axios({ method:'get', url:'/api/v1/pomodoros' })
      .then( (res) => {
        const pomodoros = res.data.pomodoros;
        this.setState({ pomodoros });
      })
  }

  render() {
    return (
      <div className='container'>
        <PomodorosAppHeader />
        <PomodorosAppBody pomodoros={this.state.pomodoros} />
      </div>
    );
  }
}
