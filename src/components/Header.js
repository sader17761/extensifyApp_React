import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-Active" exact={true}>Dashboard </NavLink>
        <NavLink to="/create" activeClassName="is-Active">Add Expense </NavLink>
        <NavLink to="/help" activeClassName="is-Active">Help </NavLink>
    </header>
);

export default Header;