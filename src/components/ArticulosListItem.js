import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ArticulosListItem = ({ id, titulo, precio, creadoEl }) => (
    <Link className="list-item" to={`/edit/${id}`} >
        <div>
            <h3 className="list-item__titulo">{titulo}</h3>
            <span className="list-item__subtitulo"> {moment(creadoEl).format('DD-MMM-YY')}</span>
        </div>
        <h3 className="list-item__detalle">{numeral(precio).format('0,0.00')}</h3>
    </Link>
);

export default ArticulosListItem;

