import moment from 'moment';
/// Filtros reducer
// en el orden correspondiente del arreglo filtros
const filtrosReducerDefaultState = {
    texto:'',
    ordenarPor:'',
    fechaInicio: moment().startOf('month'),
    fechaFin: moment().endOf('month')
};

export default (state = filtrosReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXTFILTER':
            return {...state,
                    texto: action.textFilter};
        case 'SET_SORTBY_PRECIO':
            return {...state,
                    ordenarPor: 'precio'};
        case 'SET_SORTBY_FECHA':
            return {...state,
                ordenarPor: 'fecha'};
        case 'SET_FECHAINICIO':
            return {...state,
                    fechaInicio: action.fechaInicio };
        case 'SET_FECHAFIN':
            return {...state,
                    fechaFin: action.fechaFin };
        default:
            return state;
    }
};
