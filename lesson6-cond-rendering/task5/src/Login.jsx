import React from 'react';

// in: obj ({onLogin: callback})
// out: jsx
const Login = ({ onLogin }) => {
  return (
    <button className="login btn" onClick={onLogin}>
      Login
    </button>
  );
};

export default Login;
