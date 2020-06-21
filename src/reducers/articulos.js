// Articulos reducer
// valor default de las variables del state
const articulosReducerDefaultState = [];
export default (state = articulosReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ARTICULO':
            return [...state, action.articulo];

            case 'REMOVE_ARTICULO':
            return state.filter(({ id }) => (id !== action.id));

            case 'EDIT_ARTICULO':
        return state.map( (item) => {
                if ( item.id === action.id ){
                    return {    ...item,
                                ...action.dato };
                } else {
                    return item;
                }
            });
        default:
            return state;
    }
}