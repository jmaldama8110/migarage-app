import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/// ADD articulos
const addArticulo = ({ titulo = '',
    nota = '',
    precio = 0,
    creadoEl = 0 } = {}) => ({
            type: 'ADD_ARTICULO',
            articulo: {
                id: uuid(),
                titulo,
                nota,
                precio,
                creadoEl
            }
        });
/// REMOVE articulos
const removeArticulo = ( { id } = {} ) => (
    {   type: 'REMOVE_ARTICULO',
        id
    });
// EDIT articulo
const editArticulo = ( id, dato ) => (
    {   type: 'EDIT_ARTICULO',
        id,
        dato
    });

    
// SET texto filtro
const setTextFilter = ( textFilter = '' ) => (
    {   type: 'SET_TEXTFILTER',
        textFilter
    });

const sortByPrecio = ( ) => ({
        type: 'SET_SORTBY_PRECIO'
});

const sortByFecha = ( ) => ({
    type: 'SET_SORTBY_FECHA'
});

// SET fecha inicio
const setFechaInicio = ( fechaInicio = undefined ) => ({
    type: 'SET_FECHAINICIO',
    fechaInicio
});
// SET fecha fin
const setFechaFin = ( fechaFin = undefined ) => ({
    type: 'SET_FECHAFIN',
    fechaFin
});

// Articulos reducer
// valor default de las variables del state
const articulosReducerDefaultState = [];
const articulosReducer = (state = articulosReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ARTICULO':
            return [...state, action.articulo];

            case 'REMOVE_ARTICULO':
            return state.filter(({ id }) => (id !== action.id));

            case 'EDIT_ARTICULO':
        return state.map( (item) => {
                if ( item.id === action.id ){
                    return {    ...item,
                                ...action.dato };
                } else {
                    return item;
                }
            });
        default:
            return state;
    }
}
/// Filtros reducer
// en el orden correspondiente del arreglo filtros
const filtrosReducerDefaultState = {
    texto:'',
    ordenarPor:'',
    fechaInicio:undefined,
    fechaFin:undefined
};

const filtrosReducer = (state = filtrosReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXTFILTER':
            return {...state,
                    texto: action.textFilter};
        case 'SET_SORTBY_PRECIO':
            return {...state,
                    ordenarPor: 'precio'};
        case 'SET_SORTBY_FECHA':
            return {...state,
                ordenarPor: 'fecha'};
        case 'SET_FECHAINICIO':
            return {...state,
                    fechaInicio: action.fechaInicio };
        case 'SET_FECHAFIN':
            return {...state,
                    fechaFin: action.fechaFin };
        default:
            return state;
    }
};

// Aplicar filtros
const getVisibleArticulos = (articulos, { texto, ordenarPor,fechaInicio, fechaFin }) => {

    return articulos.filter( (item)=> {

        const fechaInicioLogica = typeof fechaInicio !== 'number' || item.creadoEl >= fechaInicio;
        const fechaFinLogica = typeof fechaFin !== 'number' || item.creadoEl <= fechaFin;
        const textoLogica = !texto || item.titulo.toLowerCase().search( texto.toLowerCase() ) != -1;
        
        return fechaInicioLogica && fechaFinLogica && textoLogica;
        
    }).sort( (a,b) => {
        const tipoOrden = -1;

        if( ordenarPor === 'fecha' ){
            return a.creadoEl < b.creadoEl ? tipoOrden : tipoOrden*(-1);
        }
        if( ordenarPor === 'precio' ){
            return a.precio < b.precio ? tipoOrden: tipoOrden*(-1);
        }
    })

}
 
// creacion del Store
const store = createStore(
    combineReducers({
        articulos: articulosReducer,
        filtros: filtrosReducer
    })
);

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

// store.dispatch( editArticulo( articuloTre.articulo.id, { titulo:'CAJA DE MADERA ', nota: 'escribe una nota aqui..',precio: 345 } ) );

//store.dispatch( setTextFilter() );

// store.dispatch( setTextFilter() );

store.dispatch( sortByPrecio() );
// store.dispatch( sortByFecha() )

// store.dispatch( setFechaInicio() )
store.dispatch( setFechaInicio() )
store.dispatch( setFechaFin())
// store.dispatch( setFechaFin() )
// store.dispatch( setFechaFin(1615) )
