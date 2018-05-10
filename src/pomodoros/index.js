import React, { Component } from 'react';
import { Row, PageHeader } from 'react-bootstrap';
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
        <Row>
          <PageHeader>
            Pomodoros. <small>Trust the process.</small>
          </PageHeader>
        </Row>
        <Row>
          {
            this.state.pomodoros.map ( (pomodoro) =>
                <h1>{ pomodoro.description } { pomodoro.duration }</h1>
            )
          }
        </Row>
      </div>
    );
  }
}
