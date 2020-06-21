import React from 'react';

export default class ArticuloForm extends React.Component {

    state = {
        titulo: '',
        nota: ''
    };
    onTituloChange = (e) =>{
        const titulo = e.target.value;
        this.setState( ()=> ( {titulo} ) );
    }
    onNotaChange = (e) =>{
        const nota = e.target.value;
        this.setState( ()=> ( {nota} ) );
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Titulo..."
                        autoFocus
                        value={this.state.titulo}
                        onChange={this.onTituloChange}
                    />
                    <input
                        type="number"
                        placeholder="Precio..."
                    />
                    <textarea
                        placeholder="Escribe aqui una nota sobre este articulo..."
                        value={this.state.nota}
                        onChange={this.onNotaChange}
                    >
                    </textarea>
                    <button>Agregar Articulo</button>
                </form>
            </div>
        );
    }

}

