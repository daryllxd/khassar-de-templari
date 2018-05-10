import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import NavBarItem from 'components/NavBar/NavBarItem';

const NavBar = () => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link className="ph2" to="/">Daryllxd Web Front-end.</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavBarItem href="pomodoros" title="Pomodoros"/>
        <NavBarItem href="expenses" title="Expenses"/>
        <NavBarItem href="books" title="Books"/>
      </Nav>
    </Navbar>
  )
}

export default NavBar;
