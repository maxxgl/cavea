import React from 'react';

interface IState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<{}, IState> {
  public state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: object) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Failure</h1>;
    }

    return this.props.children; 
  }
}