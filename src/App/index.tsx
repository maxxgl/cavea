import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from 'routes';

import AppContainer from './AppContainer';
import LandingPage from 'LandingPage';

const NodePanel = lazy(() => import('LandingPage'));

const App: React.FC = () => (
  <AppContainer>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={routes.tournament}>
          <NodePanel />
        </Route>
        <Switch>
          <LandingPage />
        </Switch>
      </Switch>
    </Suspense>
  </AppContainer>
);

export default App;
