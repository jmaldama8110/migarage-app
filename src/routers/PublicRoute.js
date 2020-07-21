import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ( { estaLogueado, component:ComponenteLocal, ...otrosParametros } ) =>
     (////// estaLogueado y component son las propiedades excluidas de las variables 'otrosParametros'
        ///// lo cual permite que se realice la logica correspodiente
        <Route  {...otrosParametros} 
                component=
                {   (props) => (    estaLogueado    ?  <Redirect to='/dashboard'      />  
                                                    :      <ComponenteLocal {...props} /> ) }
                />
);

const mapStateToProps = (state) => ({
    estaLogueado: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);