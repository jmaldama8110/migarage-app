import React from 'react';
import { connect } from 'react-redux';
import ArticulosListItem from './ArticulosListItem';
import selectedArticulos from '../selectors/articulos';

const ArticulosLista = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="mostrar-en-movil">Articulo</div>
            <div className="mostrar-en-escritorio">Articulo</div>
            <div className="mostrar-en-escritorio">Precio</div>
        </div>
    <div className="list-cuerpo">
        {
            props.articulos.length === 0 ?
                (<div className="list-item list-item--mensaje">
                    <span>No hay elementos</span>
                </div>)
                : (
                    props.articulos.map((item) => (
                        <ArticulosListItem {...item} />
                    ))
                )
        }

    </div>

    </div>
);

const mapStateToProps = (state) => {

    return {
        articulos: selectedArticulos(state.articulos, state.filtros)
    };
}

export default connect(mapStateToProps)(ArticulosLista);
