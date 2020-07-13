
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {  Provider } from 'react-redux';

import { fxSetArticulosLista } from './actions/articulos';
import getVisibleArticulos from './selectors/articulos';
import {setTextFilter,sortByFecha,sortByPrecio,setFechaInicio, setFechaFin} from './actions/filtros';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Cargando...</p>, document.getElementById('app'))

    store.dispatch( fxSetArticulosLista() ).then( ()=>{
        ReactDOM.render(jsx, document.getElementById('app'))
    })

    
//    ReactDOM.render(jsx, document.getElementById('app'))

    
