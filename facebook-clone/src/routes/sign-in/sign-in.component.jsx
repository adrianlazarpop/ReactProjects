import Button from "../../components/button/button.component";
import Card from "../../components/card/card.component";
import InputSignIn from "../../components/input-signin/input-signin";

import './sign-in.styles.scss';



const SignIn = () => {

  return (
    <div className="pageSignIn">
      <div className="mainSignInContent">
        <div className="signInTitle">
          <h1>facebook</h1>
          <h2>Connect with friends and the world around you on Facebook.</h2>
        </div>

        <Card>

          <InputSignIn placeholder={'Email or phone number'} type={'username'}/>
          <InputSignIn placeholder={'Password'} type={'password'}/>
          
          <Button type={'logIn'} text={'Log In'} />
          <div className="horizontalLine"></div>
          <Button type={'newAccount'} text={'Create new account'} />
        </Card>

      </div>


      <footer>Adrian Lazar Pop &copy; 2022 
      </footer>

    </div>


  )
}

export default SignIn;