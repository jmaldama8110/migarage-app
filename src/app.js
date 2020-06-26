
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
    console.log( store.getState() );
//    const visibleArticulos = getVisibleArticulos( state.articulos, state.filtros );

});

const articulo1 = store.dispatch(addArticulo({ titulo: 'Sierra de mesa', precio: 1500.40 , creadoEl: 1591203600000 }))
const articulo2 = store.dispatch(addArticulo({ titulo: 'Mesa de trabajo', precio: 1400.50 , creadoEl: 1591203600000 }))
const articulo3 = store.dispatch(addArticulo({ titulo: 'Ingletadora', precio: 2800.50 , creadoEl: 1591203600000 }))
const articulo4 = store.dispatch(addArticulo({ titulo: 'Cierra radial', precio: 900.90 , creadoEl: 1592326800000 }))
const articulo5 = store.dispatch(addArticulo({ titulo: 'Rotomartillo', precio: 2500.10 , creadoEl: 1592326800000 }))
const articulo6 = store.dispatch(addArticulo({ titulo: 'Juego de formones', precio: 5500.75 , creadoEl: 1592326800000 }))
const articulo7 = store.dispatch(addArticulo({ titulo: 'Pijas', precio: 199.80 , creadoEl: 1592326800000 }))
const articulo8 = store.dispatch(addArticulo({ titulo: 'Canteadora', precio: 1810.5 , creadoEl: 1592326800000 }))
const articulo9 = store.dispatch(addArticulo({ titulo: 'Cepillo', precio: 230.9 , creadoEl: 1591117200000 }))
const articulo10 = store.dispatch(addArticulo({ titulo: 'Brocas', precio: 180.8 , creadoEl: 1591117200000 }))


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
