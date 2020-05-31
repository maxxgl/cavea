import React, { Suspense, lazy } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import routes from 'routes';

import AppContainer from './AppContainer';

const NodePanel = lazy(() => import('NodePanel'));

const Home: React.FC = () => (
  <main>
    <h1>Watch</h1>
    <Link to={routes.node}>Node Panel</Link>
  </main>
);

const App: React.FC = () => (
  <AppContainer>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={routes.node}>
          <NodePanel />
        </Route>
        <Switch>
          <Home />
        </Switch>
      </Switch>
    </Suspense>
  </AppContainer>
);

export default App;
