import React from 'react';

// in: obj ({onLogout: callback})
// out: jsx
const Logout = ({ onLogout }) => {
  return (
    <button className="logout btn" onClick={onLogout}>
      Logout
    </button>
  );
};

export default Logout;
