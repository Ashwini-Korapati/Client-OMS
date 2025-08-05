import { Component } from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    localStorage.setItem('lastError', JSON.stringify({
      message: error.toString(),
      stack: errorInfo.componentStack
    }));
  }

  componentDidMount() {
    const lastError = localStorage.getItem('lastError');
    if (lastError) {
      try {
        const errorData = JSON.parse(lastError);
        this.setState({
          hasError: true,
          error: new Error(errorData.message),
          errorInfo: { componentStack: errorData.stack }
        });
      } catch (e) {
        localStorage.removeItem('lastError');
      }
    }
  }

  handleReturnToLogin = () => {
    localStorage.removeItem('lastError');
    // Using window.location instead of navigate
    window.location.href = '/login';
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <div className="error-content">
            <div className="error-icon">⚠️</div>
            <h1 className="error-title">Oops! Something went wrong</h1>
            <p className="error-message">
              We encountered an unexpected error. Please try again later.
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-details">
                <summary>Error Details</summary>
                <p>{this.state.error.toString()}</p>
                <pre>{this.state.errorInfo?.componentStack}</pre>
              </details>
            )}
            
            <button 
              className="return-button"
              onClick={this.handleReturnToLogin}
            >
              Return to Login
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;