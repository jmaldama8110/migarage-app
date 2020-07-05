import React from 'react';
import {connect} from 'react-redux';
import ArticuloForm from './ArticuloForm';
import { fxAddArticulo } from '../actions/articulos';

const AddArticuloPage = (props) => (
    <div>
        <h1>Captura Articulo</h1>
        <ArticuloForm
            onSubmit={ (item)=> {
                props.dispatch( fxAddArticulo( item ) );
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddArticuloPage);