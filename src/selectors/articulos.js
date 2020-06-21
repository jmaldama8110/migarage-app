// Aplicar filtros
export default (articulos, { texto, ordenarPor,fechaInicio, fechaFin }) => {

    return articulos.filter( (item)=> {

        const fechaInicioLogica = typeof fechaInicio !== 'number' || item.creadoEl >= fechaInicio;
        const fechaFinLogica = typeof fechaFin !== 'number' || item.creadoEl <= fechaFin;
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