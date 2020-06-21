
import uuid from 'uuid';

/// ADD articulos
export const addArticulo = ({ titulo = '',
    nota = '',
    precio = 0,
    creadoEl = 0 } = {}) => ({
            type: 'ADD_ARTICULO',
            articulo: {
                id: uuid(),
                titulo,
                nota,
                precio,
                creadoEl
            }
        });
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

