import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'utilities/axios';
import PomodorosAppHeader from 'pomodoros/PomodorosAppHeader';
import PomodorosAppBody from 'pomodoros/PomodorosAppBody';

const mapStateToProps = state => {
  return {
    pomodoroApp: state.pomodoroApp
  }
};

export const setPomodoros = pomodoros => ({ type: 'SET_POMODOROS', pomodoros: pomodoros });

const mapDispatchToProps = dispatch => {
  return {
    setPomodoros: pomodoros => dispatch(setPomodoros(pomodoros))
  };
};

class NRPomodorosApp extends Component {
  componentDidMount() {
    axios({ method:'get', url:'/api/v1/pomodoros' })
      .then( (res) => {
        const pomodoros = res.data.pomodoros;
        this.props.setPomodoros(pomodoros)
      })
  }

  render() {
    return (
      <div className='container'>
        <PomodorosAppHeader />
        <PomodorosAppBody pomodoros={this.props.pomodoroApp.pomodoros} />
      </div>
    );
  }
}

const PomodorosApp = connect(mapStateToProps, mapDispatchToProps)(NRPomodorosApp);

export default PomodorosApp;
