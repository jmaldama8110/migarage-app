import React from 'react';
import {connect} from 'react-redux';
import {fxLogin} from '../actions/auth';


const LoginPage = ( props ) => (
    <div>
            <button onClick={props.detonarLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    detonarLogin: () => dispatch( fxLogin() )
});

export default connect(undefined,mapDispatchToProps)(LoginPage);