import React from 'react';
import { connect } from 'react-redux';
import {editArticulo, removeArticulo} from '../actions/articulos';
import ArticuloForm from './ArticuloForm';

const EditItemPage = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Editar Articulo</h1>           
            <ArticuloForm
            articuloProp = {props.articulo}
            onSubmit={ (articuloUpdated)=> {
                props.dispatch( editArticulo( props.articulo.id, articuloUpdated ) );
                props.history.push('/');
            }}/>
            <button onClick={ ()=>{
                props.dispatch( removeArticulo( { id: props.articulo.id} ) );
                props.history.push('/');
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