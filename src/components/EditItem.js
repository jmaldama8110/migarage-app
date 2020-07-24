import React from 'react';
import { connect } from 'react-redux';
import { fxEditArticulo, fxRemoveArticulo } from '../actions/articulos';
import ArticuloForm from './ArticuloForm';

const EditItemPage = (props) => {

    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__titulo">Editar Articulo</h1>
                </div>
            </div>

            <div className="content-container">
                <ArticuloForm
                    articuloProp={props.articulo}
                    onSubmit={(articuloUpdated) => {
                        props.dispatch(fxEditArticulo(props.articulo.id, articuloUpdated));
                        props.history.push('/dashboard');
                    }} />

                <div>
                    <button className="button-layout button-layout--secundario" onClick={() => {
                        props.dispatch(fxRemoveArticulo({ id: props.articulo.id }));
                        props.history.push('/dashboard');
                    }}>Eliminar</button>
                </div>
            </div>
        </div>

    );

};

const mapStateToProps = (state, props) => {
    return {
        articulo: state.articulos.find((item) =>
            item.id === props.match.params.id
        )
    };

};

export default connect(mapStateToProps)(EditItemPage);