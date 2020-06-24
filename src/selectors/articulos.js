import moment from 'moment';
// Aplicar filtros
export default (articulos, { texto, ordenarPor,fechaInicio, fechaFin }) => {

    return articulos.filter( (item)=> {
        
        const creadoElmoment = moment(item.creadoEl)
        const fechaInicioLogica = fechaInicio ? fechaInicio.isSameOrBefore(creadoElmoment,'day'): true ;
        const fechaFinLogica =  fechaFin ? fechaFin.isSameOrAfter(creadoElmoment,'day') : true;
        const textoLogica = !texto || item.titulo.toLowerCase().search( texto.toLowerCase() ) != -1;
        
        return fechaInicioLogica && fechaFinLogica && textoLogica;
        
    }).sort( (a,b) => {
        const tipoOrden = -1;

        if( ordenarPor === 'fecha' ){
            return a.creadoEl < b.creadoEl ? tipoOrden : tipoOrden*(-1);
        }
        if( ordenarPor === 'precio' ){
            return a.precio < b.precio ? tipoOrden: tipoOrden*(-1);
        }
    })

}