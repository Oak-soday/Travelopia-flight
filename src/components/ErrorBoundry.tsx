import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children?: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        console.log(error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Typescript Error Caught:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Opps! Something is wrong.</h1>;
        }

        return this.props?.children || null;
    }
}

export default ErrorBoundary;
