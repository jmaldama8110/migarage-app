import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import articulosReducer from '../reducers/articulos';
import filtrosReducer from '../reducers/filtros';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose;
// creacion del Store
export default () => {
    
    const store = createStore(
        combineReducers({
            articulos: articulosReducer,
            filtros: filtrosReducer
        }),
        composeEnhancers( applyMiddleware(thunk) )
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  
return store;

};
