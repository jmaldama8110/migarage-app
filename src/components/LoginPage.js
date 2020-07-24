import React from 'react';
import {connect} from 'react-redux';
import {fxLogin} from '../actions/auth';


const LoginPage = ( props ) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__titulo">Mi Garage</h1>
            <p>Compra, vende o haz trueque de cosas que ya no necesitas!</p>
            <button className="button-layout" onClick={props.detonarLogin}>Sesion Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    detonarLogin: () => dispatch( fxLogin() )
});

export default connect(undefined,mapDispatchToProps)(LoginPage);