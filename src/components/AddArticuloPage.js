import React from 'react';
import {connect} from 'react-redux';
import { addArticulo } from '../actions/articulos';
import ArticuloForm from './ArticuloForm';

const AddArticuloPage = (props) => (
    <div>
        <h1>Captura Articulo</h1>
        <ArticuloForm
            onSubmit={ (item)=> {
                props.dispatch( addArticulo( item ) )
                props.history.push('/')
            }}
        />
    </div>
);

export default connect()(AddArticuloPage);