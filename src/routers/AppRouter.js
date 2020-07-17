
import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/Dashboard';
import AddArticuloPage from '../components/AddArticuloPage';
import EditItemPage from '../components/EditItem';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import ProtectedRoute from './ProtectedRoute';

export const history = createHistory();

const AppRouter = ()=> (
    <Router history={history}>
    <div>
        <Switch>
            <Route path="/" component={LoginPage} exact={true}/>
            <ProtectedRoute path="/dashboard" component={DashboardPage} exact={true} />
            <ProtectedRoute path="/create" component={AddArticuloPage} />
            <ProtectedRoute path="/edit/:id" component={EditItemPage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>

    </Router>
);


export default AppRouter;