import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ArticuloForm extends React.Component {

    constructor (props){
        super(props);

        this.state = {
            titulo: props.articuloProp ? props.articuloProp.titulo: '',
            nota: props.articuloProp ? props.articuloProp.nota: '',
            precio: props.articuloProp ? props.articuloProp.precio:'',
            creadoEl: props.articuloProp ? moment(props.articuloProp.creadoEl) : moment(),
            calendarFocused: false,
            error: ''
        };

    }

    onTituloChange = (e) =>{
        const titulo = e.target.value;
        this.setState( ()=> ( {titulo} ) );
    }
    onNotaChange = (e) =>{
        const nota = e.target.value;
        this.setState( ()=> ( {nota} ) );
    }
    onPrecioChange = (e) =>{
        const importe = e.target.value;
        if( !importe || importe.match(/^\d{1,}(\.\d{0,2})?$/) ){
            this.setState( ()=> ( { precio: importe} ) );
        }
    }

    onCreadoElChange = ( creadoEl ) => {
        if( creadoEl ){
            this.setState( ()=>( {creadoEl} ) );
       }
    }

    onCalendarFocusChange = ( {focused} ) => {
        this.setState( () => ( { calendarFocused: focused } ));
    }

    onSubmit = (e) =>{
        e.preventDefault();

        if( !this.state.titulo || !this.state.precio ){
            this.setState( ()=>( { error:'Titulo/precio no pueden quedar en blanco...'} ) );
        } else {
            this.setState( ()=>( { error:''} ) );
            this.props.onSubmit({
                    titulo: this.state.titulo,
                    precio: this.state.precio,
                    creadoEl: this.state.creadoEl.valueOf(),
                    nota: this.state.nota
            });
        }
    }

    render() {
        return (
                <form className="form-input" onSubmit={this.onSubmit}>
                    { this.state.error && <p className="form-input__error">{this.state.error}</p>}
                    <input
                        className="text-input"
                        type="text"
                        placeholder="Titulo..."
                        autoFocus
                        value={this.state.titulo}
                        onChange={this.onTituloChange}
                    />
                    <input
                        className="text-input"
                        type="text"
                        placeholder="Precio..."
                        value={this.state.precio}
                        onChange={this.onPrecioChange}
                    />
                    <SingleDatePicker 
                        date={this.state.creadoEl}
                        onDateChange={this.onCreadoElChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day)=>false}
                        displayFormat="DD-MM-YYYY"

                    />
                    <textarea
                        className="textarea-input"
                        placeholder="Escribe aqui una nota sobre este articulo..."
                        value={this.state.nota}
                        onChange={this.onNotaChange}
                    >
                    </textarea>
                    <div>
                        <button className="button-layout">Guardar</button>
                    </div>
                </form>
        );
    }

}

