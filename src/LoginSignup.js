import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm'; // Create this component separately
import SignupForm from './SignupForm'; // Create this component separately

function LoginSignup() {
  return (
    <div>
      <h1>Login or Sign Up</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
      </Switch>
    </div>
  );
}

export default LoginSignup;