import React from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar'
import PomodorosApp from './pomodoros'
import BooksApp from './books'
import Expenses from './containers/expenses'
import './App.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Route exact path="/pomodoros" component={PomodorosApp} />
      <Route exact path="/expenses" component={Expenses} />
      <Route exact path="/books" component={BooksApp} />
    </div>
  );
}

export default App;
