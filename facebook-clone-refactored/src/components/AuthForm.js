import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from './AuthForm.module.scss';

import axios from 'axios';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const actionIsNotLoading = (
    <button>{isLogin ? 'Login' : 'Create new account'}</button>
  );


  const toggleAuthState = () => {
    setIsLogin((prevState) => {
      return !prevState;
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();

    let usernameValue = usernameInputRef.current.value;
    let passwordValue = passwordInputRef.current.value;

    usernameValue = 'eve.holt@reqres.in';
    passwordValue = 'cityslicka';

    setIsLoading(true);

    if (isLogin) {
      // login request
      axios.post('https://reqres.in/api/login', {
        username: usernameValue,
        password: passwordValue,
      })
        .then(function (response) {
          setIsLoading(false);
          navigate('/');
        })
        .catch(function (error) {
          setIsError(true);
          setIsLoading(false);
          usernameInputRef.current.value = '';
          passwordInputRef.current.value = '';
        });
    } else {
      //register request
      axios.post('https://reqres.in/api/register', {
        username: usernameValue,
        password: passwordValue,
      })
        .then(function (response) {
          setIsLoading(false);
          navigate('/');
        })
        .catch(function (error) {
          setIsError(true);
          setIsLoading(false);
          usernameInputRef.current.value = '';
          passwordInputRef.current.value = '';
        });
    }
  }



  return (
    <div className={classes.authContainer}>
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign up"}</h1>

        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            {/* <label htmlFor="email">Enter your email</label> */}
            <input className={classes.controlInput} type="email" id="email" required ref={usernameInputRef} placeholder='Enter your email'></input>
          </div>

          <div className={classes.control}>
            {/* <label htmlFor="password">Enter your password</label> */}
            <input className={classes.controlInput} type="password" id="password" required ref={passwordInputRef} placeholder='Enter your password'></input>
          </div>

          <div className={classes.actions}>

            {isError && <p>Please try again</p>}
            {isLoading && <p>Sending request...</p>}
            {!isLoading && actionIsNotLoading}
            <button className={classes.toggle} onClick={toggleAuthState}>{isLogin ? 'Create new account' : 'Login with an existing account'}</button>
          </div>
        </form>
      </section>
    </div>



  );
};

export default AuthForm;
