
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {  Provider } from 'react-redux';

import {addArticulo,editArticulo,removeArticulo} from './actions/articulos';
import getVisibleArticulos from './selectors/articulos';
import {setTextFilter,sortByFecha,sortByPrecio,setFechaInicio, setFechaFin} from './actions/filtros';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleArticulos = getVisibleArticulos( state.articulos, state.filtros );
    console.log(visibleArticulos );
});


const articulo1 = store.dispatch(addArticulo({ titulo: 'Sierra de mesa', precio: 1540 , creadoEl: 150 }))
const articulo2 = store.dispatch(addArticulo({ titulo: 'Mesa de trabajo', precio: 1450 , creadoEl: 100 }))
const articulo3 = store.dispatch(addArticulo({ titulo: 'Ingletadora', precio: 2850 , creadoEl: 50 }))
const articulo4 = store.dispatch(addArticulo({ titulo: 'Cierra radial', precio: 990 , creadoEl: -50 }))
const articulo5 = store.dispatch(addArticulo({ titulo: 'Rotomartillo', precio: 2500 , creadoEl: -100 }))
const articulo6 = store.dispatch(addArticulo({ titulo: 'Juego de formones', precio: 575 , creadoEl: 150 }))
const articulo7 = store.dispatch(addArticulo({ titulo: 'Pijas', precio: 120 , creadoEl: 100 }))
const articulo8 = store.dispatch(addArticulo({ titulo: 'Canteadora', precio: 1850 , creadoEl: 50 }))
const articulo9 = store.dispatch(addArticulo({ titulo: 'Cepillo', precio: 2340 , creadoEl: -50 }))
const articulo10 = store.dispatch(addArticulo({ titulo: 'Brocas', precio: 18 , creadoEl: -100 }))

// //store.dispatch(removeArticulo({ id: articuloUno.articulo.id }));

// store.dispatch( setFechaInicio() )
 //store.dispatch( setFechaInicio(000) )
 //store.dispatch( setFechaFin(100))
// store.dispatch( setFechaFin() )
// store.dispatch( setFechaFin(1615) )

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))
