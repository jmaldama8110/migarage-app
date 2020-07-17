import React from 'react';
import { connect } from 'react-redux';
import {fxEditArticulo, fxRemoveArticulo} from '../actions/articulos';
import ArticuloForm from './ArticuloForm';

const EditItemPage = (props) => {

    return (
        <div>
            <h1>Editar Articulo</h1>           
            <ArticuloForm
            articuloProp = {props.articulo}
            onSubmit={ (articuloUpdated)=> {
                props.dispatch( fxEditArticulo( props.articulo.id, articuloUpdated ) );
                props.history.push('/dashboard');
            }}/>
            <button onClick={ ()=>{
                props.dispatch( fxRemoveArticulo( { id: props.articulo.id} ) );
                props.history.push('/dashboard');
            }}>Eliminar</button>
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