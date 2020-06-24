import React from 'react';
import ArticulosLista from './ArtitulosList';
import ArticulosListFiltro from './ArticulosListFiltro';
const DashboardPage = () => (
    <div>
        <ArticulosListFiltro />
        <ArticulosLista />
    </div>
);

export default DashboardPage;