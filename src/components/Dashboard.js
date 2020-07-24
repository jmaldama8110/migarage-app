import React from 'react';
import ArticulosLista from './ArtitulosList';
import ArticulosListFiltro from './ArticulosListFiltro';
import ArticulosListTotales from './ArticulosListTotales';

const DashboardPage = () => (
    <div>
        <ArticulosListTotales />
        <ArticulosListFiltro />
        <ArticulosLista />
    </div>
);


export default DashboardPage;