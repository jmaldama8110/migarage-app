
export default (articulos) => {

    const conteo = articulos.length;
    let suma = 0;
    
    articulos.forEach( (item) => suma = suma + parseFloat(item.precio) );
    
    return {
        conteo,
        total: suma
    }

}