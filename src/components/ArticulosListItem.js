import React from 'react';
import { connect } from 'react-redux';
import {removeArticulo} from '../actions/articulos';

const ArticulosListItem = ( {dispatch, id, titulo, precio, creadoEl} ) => (
    <div>
    {titulo}/{precio} / {creadoEl}
    <button onClick={ ()=>{
        dispatch( removeArticulo( {id} ) );
    }}>Eliminar</button>
    </div>
);


export default connect() (ArticulosListItem);