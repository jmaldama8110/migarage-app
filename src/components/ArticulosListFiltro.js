import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByPrecio, sortByFecha, setFechaInicio, setFechaFin } from '../actions/filtros';

import 'moment/locale/es'
import { DateRangePicker } from 'react-dates';

class ArticulosListFiltro extends React.Component {

    state = {
        calendarFocused: null
    };

    onCambioRangoFechas = ( {startDate, endDate} ) => {
        this.props.dispatch( setFechaInicio(startDate) );
        this.props.dispatch( setFechaFin(endDate) );

    };
    onCambioFocus = ( focused ) => {
        this.setState( ()=>( { calendarFocused: focused } ));
    }

    render () {
        return(
        <div>
        <input type="text" value={this.props.filtros.texto} onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
        }} />
        <select value={this.props.filtros.ordenarPor}
            onChange={(e) => {
                if (e.target.value === 'fecha') {
                    this.props.dispatch(sortByFecha());
                }
                if (e.target.value === 'precio') {
                    this.props.dispatch(sortByPrecio());
                }
            }}>
            <option value="fecha">Fecha</option>
            <option value="precio">Precio</option>
        </select>
        <DateRangePicker
            startDate={this.props.filtros.fechaInicio}
            endDate={this.props.filtros.fechaFin}
            onDatesChange={this.onCambioRangoFechas}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onCambioFocus}
            numberOfMonths={1}
            isOutsideRange={()=> false }
            showClearDates={true}
            
        />
    </div>
    ) };
};



const mapStateToProps = (state) => {
    return {
        filtros: state.filtros
    }
}

export default connect(mapStateToProps)(ArticulosListFiltro);