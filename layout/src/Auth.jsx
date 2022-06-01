import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// state
// isLoggedIn: bool
// isProcessing: bool

class Auth extends React.Component {
  render() {
    return (
      <>
        <Login />
        <Logout />
        <Spinner />
      </>
    );
  }
}

export default Auth;
