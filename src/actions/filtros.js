// SET texto filtro
export const setTextFilter = ( textFilter = '' ) => (
    {   type: 'SET_TEXTFILTER',
        textFilter
    });

export const sortByPrecio = ( ) => ({
        type: 'SET_SORTBY_PRECIO'
});

export const sortByFecha = ( ) => ({
    type: 'SET_SORTBY_FECHA'
});

// SET fecha inicio
export const setFechaInicio = ( fechaInicio = undefined ) => ({
    type: 'SET_FECHAINICIO',
    fechaInicio
});
// SET fecha fin
export const setFechaFin = ( fechaFin = undefined ) => ({
    type: 'SET_FECHAFIN',
    fechaFin
});
