import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Mi Garage</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Inicio</NavLink>
        <NavLink to="/create" activeClassName="is-active">Capturar</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Consultar</NavLink>
        <NavLink to="/help" activeClassName="is-active">Ayuda</NavLink>
    </header>
);

export default Header;