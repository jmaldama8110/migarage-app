import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import selectedArticulos from '../selectors/articulos';
import articulosTotales from '../selectors/articulostotales';
import numeral from 'numeral';

const ArticulosListTotales = (props) => (

    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__titulo">Articulos <span>{props.totales.conteo} </span> 
                Total <span>{numeral(props.totales.total).format('0,0.00')}</span> </h1>
            <div className="page-header__actions">
                <Link className="button-layout" to="/create">Crear Nuevo</Link>
            </div>
            
            
        </div>
    </div>

);

const mapStateToProps = (state) => {
    const articulos = selectedArticulos(state.articulos, state.filtros);
    const totales = articulosTotales(articulos);

    return {
        articulos,
        totales
    };
};

export default connect(mapStateToProps)(ArticulosListTotales);
