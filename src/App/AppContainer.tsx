import React from 'react';
import Styled from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';

const Container = Styled.div`
  padding: 1em;
`;

const AppContainer: React.FC = props => (
  <ErrorBoundary>
    <Router>
      <Container>
        {props.children}
      </Container>
    </Router>
  </ErrorBoundary>
)

export default AppContainer;
