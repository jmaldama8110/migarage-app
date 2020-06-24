import React from 'react';
import {Link} from 'react-router-dom';

const ArticulosListItem = ( { id, titulo, precio, creadoEl } ) => (
    <div>
    <Link to={'/edit/'+ id}>{titulo}</Link>/{precio} / {creadoEl}
    </div>
);


export default ArticulosListItem;