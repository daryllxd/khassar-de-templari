import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Books from './containers/books'
import Expenses from './containers/expenses'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link className="ph2" to="/">Daryllxd Web Front-end.</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="#">
              <Link className="ph2" to="/">Pomodoros</Link>
            </NavItem>
            <NavItem href="#">
              <Link className="ph2" to="/expenses">Expenses</Link>
            </NavItem>
            <NavItem href="#">
              <Link className="ph2" to="/books">Books</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Route exact path="/expenses" component={Expenses} />
        <Route exact path="/books" component={Books} />
      </div>
    );
  }
}

export default App;
