import React from 'react';
import { connect } from 'react-redux';
import selectedArticulos from '../selectors/articulos';
import articulosTotales  from '../selectors/articulostotales';
import numeral from 'numeral';

const ArticulosListTotales = (props) => (

    <div>
    <h2>No:{props.totales.conteo} Total:{numeral( props.totales.total).format('0,0.00')} </h2>
    </div>

);

const mapStateToProps = (state) => {
    const articulos = selectedArticulos(state.articulos,state.filtros);
    const totales = articulosTotales(articulos);

    return {
        articulos,
        totales
    };
};

export default connect(mapStateToProps) (ArticulosListTotales);
