
import uuid from 'uuid';
import db from '../firebase/firebase';

/// ADD articulos
export const addArticulo = (articulo) => ({
            type: 'ADD_ARTICULO',
            articulo
        });

export const fxAddArticulo = (articuloDetalle) => {

    return (dispatch) => {
        const { // default values 
            titulo = '',
            nota = '',
            precio = 0,
            creadoEl = 0 } = articuloDetalle; // values pasados por parametros
            
        const articulo = { titulo, nota, precio, creadoEl };

        db.ref('articulos').push(articulo).then( (ref) => {
            dispatch( addArticulo( {    id: ref.key,
                                        ...articulo
            }) );
        });

    };
} 

/// REMOVE articulos
export const removeArticulo = ( { id } = {} ) => (
    {   type: 'REMOVE_ARTICULO',
        id
    });
// EDIT articulo
export const editArticulo = ( id, dato ) => (
    {   type: 'EDIT_ARTICULO',
        id,
        dato
    });

