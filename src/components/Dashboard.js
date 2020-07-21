import React from 'react';
import ArticulosLista from './ArtitulosList';
import ArticulosListFiltro from './ArticulosListFiltro';
import ArticulosListTotales from './ArticulosListTotales';

const DashboardPage = () => (
    <div>
        <ArticulosListFiltro />
        <ArticulosLista />
        <ArticulosListTotales />
    </div>
);


export default DashboardPage;