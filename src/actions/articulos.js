
import uuid from 'uuid';
import db from '../firebase/firebase';

/// ADD articulos
export const addArticulo = (articulo) => ({
    type: 'ADD_ARTICULO',
    articulo
});

export const fxAddArticulo = (articuloDetalle) => {

    return (dispatch, getState) => {

        const usuarioid = getState().auth.uid;

        const { // default values 
            titulo = '',
            nota = '',
            precio = 0,
            creadoEl = 0 } = articuloDetalle; // values pasados por parametros

        const articulo = { titulo, nota, precio, creadoEl };

        return db.ref(`usuarios/${usuarioid}/articulos`).push(articulo).then((ref) => {
            dispatch(addArticulo({
                id: ref.key,
                ...articulo
            }));
        });

    };
}

/// SET_ARTICULOS_LISTA
export const setArticulosLista = (articulos) => (
    {
        type: "SET_ARTICULOS_LISTA",
        articulos
    }
);

export const fxSetArticulosLista = () => {
    return (dispatch, getState) => {
        const usuarioid = getState().auth.uid;
        return db.ref(`usuarios/${usuarioid}/articulos`)
            .once('value')
            .then((snapshot) => {
                const listaArticulos = [];
                snapshot.forEach((child) => {
                    listaArticulos.push({ id: child.key, ...child.val() });
                });

                dispatch(setArticulosLista(listaArticulos))
            });

    };

}


/// REMOVE articulos
export const removeArticulo = ({ id } = {}) => (
    {
        type: 'REMOVE_ARTICULO',
        id
    });

export const fxRemoveArticulo = ({ id } = {}) => {
    return (dispatch,getState) => {
        const usuarioid = getState().auth.uid;
        return db.ref(`usuarios/${usuarioid}/articulos/${id}`)
            .remove()
            .then(() => {
                dispatch(removeArticulo({ id }))
            });
    }
}

// EDIT articulo
export const editArticulo = (id, dato) => (
    {
        type: 'EDIT_ARTICULO',
        id,
        dato
    });

export const fxEditArticulo = (id, dato) => {
    return (dispatch,getState) => {
        const usuarioid = getState().auth.uid;
        return db.ref(`/usuarios/${usuarioid}/articulos/${id}`)
                    .update( dato ).then( () => {
                        dispatch( editArticulo( id, dato) )
                    });
    }

}

