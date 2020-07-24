
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import {  Provider } from 'react-redux';

import { fxSetArticulosLista } from './actions/articulos';
import {login, logout} from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {firebase} from './firebase/firebase';

import CargandoPage from './components/CargandoPage';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let estaRenderizado = false; // controla si la JSX principal ya fue renderizado

const fxRenderiza = () => {
    ReactDOM.render(jsx, document.getElementById('app'))
    estaRenderizado = true;
}

ReactDOM.render(<CargandoPage />, document.getElementById('app')) 

firebase.auth().onAuthStateChanged( (usuario ) => {
    if( usuario ) {
        store.dispatch( login(usuario.uid) );
        store.dispatch( fxSetArticulosLista() ).then( ()=>{
            fxRenderiza();

            if (history.location.pathname === '/') { // solamente te manda a /dashboard cuando esta en la pagina de Login /
                history.push('/dashboard');
            }
        });
    
    }
    else{
        store.dispatch( logout() );
        fxRenderiza();
        history.push('/');
    }
});
    

    
