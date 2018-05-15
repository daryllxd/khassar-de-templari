import { combineReducers } from 'redux'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

function pomodoroApp(state = { pomodoros: [] }, action) {
  switch (action.type) {
    case 'SET_POMODOROS':
      return { ...state, pomodoros: action.pomodoros }
    case 'ADD_POMODORO':
      return { ...state, pomodoros: [...state.pomodoros, action.pomodoro] }
    default:
      return state
  }
}

export default combineReducers({
  todos,
  pomodoroApp
});
