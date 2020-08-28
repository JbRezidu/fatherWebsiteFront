import React from 'react';

import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <LoginForm />
      <div>
        Vous voulez créer un compte, cliquez <Link to="/createAccount">ici</Link>
      </div>
    </>
  );
};

export default Login;
