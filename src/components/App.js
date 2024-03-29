import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetails from '../pages/BadgeDetailsContainer';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetails} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route path="/404" component={NotFound} />
                    <Redirect from="*" to="/404" />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
