import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import MyAccount from './MyAccount';
import Login from './login/Login';

const CustomRouter = () => {
  return (
    <Switch>
      <Route exact path={['/', '/home']}>
        <Home />
      </Route>
      <Route path="/myAccount">
        <MyAccount />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/createAccount">
        <div>Create account</div>
      </Route>
    </Switch>
  );
};

export default CustomRouter;
