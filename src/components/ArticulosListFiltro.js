import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, sortByPrecio, sortByFecha } from '../actions/filtros';

const ArticulosListFiltro = (props) => (
    <div>
        <input type="text" value={props.filtros.texto} onChange={ (e)=>{
            props.dispatch(setTextFilter(e.target.value) );
        }} />
        <select value={props.filtros.ordenarPor} onChange={ (e)=>{
            if( e.target.value === 'fecha'){
                props.dispatch( sortByFecha() );
            }
            if( e.target.value === 'precio'){
                props.dispatch( sortByPrecio() );
            }
        }}>
            <option value="fecha">Fecha</option>
            <option value="precio">Precio</option>
        </select>
    </div>
);

const mapStateToProps = (state) =>{
    return {
        filtros: state.filtros
    }
}

export default connect(mapStateToProps) (ArticulosListFiltro);