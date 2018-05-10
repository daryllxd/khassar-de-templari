import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

function NavBarItem({ href, title }) {
  return (
    <NavItem componentClass={Link} href={href} to={href} active={window.location.pathname === href}>
      {title}
    </NavItem>
  )
}

export default NavBarItem;
