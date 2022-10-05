import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      navigate('/login');
    }
  }, []);
  return <div>{children}</div>;
};

export default Auth;
