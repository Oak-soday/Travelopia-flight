import React, { Component, ErrorInfo } from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
    constructor(props: {}) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Typescript Error Caught:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Opps! Something is wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
