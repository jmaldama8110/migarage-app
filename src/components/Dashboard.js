import React from 'react';
import ArticulosLista from './ArtitulosList';
import ArticulosListFiltro from './ArticulosListFiltro';
import ArticulosListTotales from './ArticulosListTotales';

const DashboardPage = () => (
    <div>
        <ArticulosListFiltro />
        <ArticulosListTotales />
        <ArticulosLista />
    </div>
);


export default DashboardPage;