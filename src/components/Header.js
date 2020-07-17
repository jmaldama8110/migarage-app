import React from 'react';
import {NavLink} from 'react-router-dom'
import {fxLogout} from '../actions/auth';
import {connect} from 'react-redux';

const Header = (props) => (
    <header>
        <h1>Mi Garage</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Inicio</NavLink>
        <NavLink to="/create" activeClassName="is-active">Ingresar Articulo</NavLink>
        <NavLink to="/help" activeClassName="is-active">Ayuda</NavLink>
        <button onClick={props.detonarLogout}>Salir</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
        detonarLogout: () => dispatch( fxLogout() )
});

export default connect( undefined, mapDispatchToProps)(Header);

