import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByPrecio, sortByFecha, setFechaInicio, setFechaFin } from '../actions/filtros';

import 'moment/locale/es'
import { DateRangePicker } from 'react-dates';

class ArticulosListFiltro extends React.Component {

    state = {
        calendarFocused: null
    };

    onCambioRangoFechas = ({ startDate, endDate }) => {
        this.props.dispatch(setFechaInicio(startDate));
        this.props.dispatch(setFechaFin(endDate));

    };
    onCambioFocus = (focused) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    render() {
        return (
            <div className="content-container">

                <div className="input-group">

                    <div className="input-group__item">
                        <input  className="text-input"
                                type="text"
                                placeholder="Buscar..."
                                value={this.props.filtros.texto}
                                onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.target.value));
                        }} />

                    </div>

                    <div className="input-group__item">
                        <select     className="select-input"
                                    value={this.props.filtros.ordenarPor}
                                    onChange={(e) => {
                                if (e.target.value === 'Fecha') {
                                    this.props.dispatch(sortByFecha());
                                }
                                if (e.target.value === 'Precio') {
                                    this.props.dispatch(sortByPrecio());
                                }
                            }}>
                            <option value="fecha">Fecha</option>
                            <option value="precio">Precio</option>
                        </select>
                    </div>

                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filtros.fechaInicio}
                            endDate={this.props.filtros.fechaFin}
                            onDatesChange={this.onCambioRangoFechas}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onCambioFocus}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />

                    </div>

                </div>
            </div>
        )
    };
};



const mapStateToProps = (state) => {
    return {
        filtros: state.filtros
    }
}

export default connect(mapStateToProps)(ArticulosListFiltro);