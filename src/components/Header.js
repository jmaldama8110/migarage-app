import React from 'react';
import { Link } from 'react-router-dom'
import { fxLogout } from '../actions/auth';
import { connect } from 'react-redux';

const Header = (props) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__titulo" to="/dashboard">
                    <h1>Mi Garage</h1>
                </Link>
                <button className="button-layout button-layout--link" onClick={props.detonarLogout}>Salir</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    detonarLogout: () => dispatch(fxLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

