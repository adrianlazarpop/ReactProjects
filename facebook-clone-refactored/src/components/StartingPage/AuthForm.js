import { useState } from "react";
import classes from './AuthForm.module.scss';

const AuthForm = () => {

  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthState = () => {
    setIsLogin((prevState) => {
      return !prevState;
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();

  };

  return <section className={classes.auth}>
    <h1>{isLogin ? 'Login' : 'Sign up'}</h1>

    <form onSubmit={submitHandler}>

      <div className={classes.control}>
        <label htmlFor="email">Enter your email</label>
        <input type='email' id='email' required></input>
      </div>

      <div className={classes.control}>
        <label htmlFor="password">Enter your password</label>
        <input type='password' id='password' required></input>
      </div>

      <div className={classes.actions}>
        <button>{isLogin ? 'Login' : 'Create new account'}</button>
        <button className={classes.toggle} onClick={toggleAuthState}>{isLogin ? 'Create new account' : 'Login with an exisiting account'}</button>
      </div>

    </form>
  </section>;
};

export default AuthForm;