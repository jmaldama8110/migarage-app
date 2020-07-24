import React from 'react';
import { connect } from 'react-redux';
import ArticuloForm from './ArticuloForm';
import { fxAddArticulo } from '../actions/articulos';

const AddArticuloPage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__titulo">Captura Articulo</h1>
            </div>
        </div>

        <div className="content-container">
            <ArticuloForm
                onSubmit={(item) => {
                    props.dispatch(fxAddArticulo(item));
                    props.history.push('/dashboard');
                }}
            />
        </div>
    </div>
);

export default connect()(AddArticuloPage);