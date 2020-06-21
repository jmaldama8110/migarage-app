
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashboardPage from '../components/Dashboard';
import AddArticuloPage from '../components/AddArticuloPage';
import EditItemPage from '../components/EditItem';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = ()=> (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={DashboardPage} exact={true} />
            <Route path="/create" component={AddArticuloPage} />
            <Route path="/edit" component={EditItemPage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>

    </BrowserRouter>
);

export default AppRouter;