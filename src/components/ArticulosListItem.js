import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ArticulosListItem = ( { id, titulo, precio, creadoEl } ) => (
    <div>
    <Link to={`/edit/${id}`} >
        <h3>{titulo}</h3> 
    </Link>
    <p>
        { numeral(precio).format('0,0.00') } - { moment(creadoEl).format('DD-MMM-YY') }
        
    </p>
    </div>
);

export default ArticulosListItem;

