import { createStore, combineReducers } from 'redux';
import articulosReducer from '../reducers/articulos';
import filtrosReducer from '../reducers/filtros';


// creacion del Store
export default () => {
    
    const store = createStore(
        combineReducers({
            articulos: articulosReducer,
            filtros: filtrosReducer
        }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  
return store;

};
