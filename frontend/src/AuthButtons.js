// AuthButtons.js (or you can include this directly in App.js as above)
import React from 'react';
import { useAuth } from '../AuthContext';

const AuthButtons = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => window.location.href = "/logout"}>Logout</button>
      ) : (
        <>
          <button onClick={() => window.location.href = "/login"}>Login</button>
          <button onClick={() => window.location.href = "/register"}>Register</button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
