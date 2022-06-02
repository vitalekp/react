import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// state
// isLoggedIn: bool
// isProcessing: bool

// algo
// 1 show Login by default +++
// 2 after Login click - show Spinner for 2 seconds +++
// 3 hide Spinner, show Logout +++
// 4 after Logout click - show Login +++

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isProcessing: false,
  };

  loginHandler = () => {
    // in: obj
    // ou undef
    this.setState({
      isProcessing: true,
    });

    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isProcessing, isLoggedIn } = this.state;
    if (isProcessing) {
      return <Spinner />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />;
    }

    return <Login onLogin={this.loginHandler} />;
  }
}

export default Auth;
