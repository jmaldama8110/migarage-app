import React from 'react';
import { connect } from 'react-redux';
import ArticulosListItem from './ArticulosListItem';
import selectedArticulos from '../selectors/articulos';

const ArticulosLista = (props) => (
    <div>
        <h1>Articulos Lista</h1>
        {
            props.articulos.map( (item) => (
                <ArticulosListItem {...item}/>
            ))
        }

    </div>
);

const mapStateToProps = (state) => {
    return {
        articulos: selectedArticulos( state.articulos, state.filtros )
    };
}

export default connect(mapStateToProps)(ArticulosLista);

