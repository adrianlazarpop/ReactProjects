import Button from "../../components/button/button.component";
import Card from "../../components/card/card.component";
import InputSignIn from "../../components/input-signin/input-signin";
import HorizontalLine from "../../components/horizontal-line/horizontal-line.component";
import './sign-in.styles.scss';



const SignIn = () => {

  return (
    <div className="page">
      <div className="container">
        <div className="title">
          <h1>facebook</h1>
          <h2>Connect with friends and the world around you on Facebook.</h2>
        </div>

        <Card padding='yes' flex='column'>
          <InputSignIn placeholder={'Email or phone number'} type={'username'}/>
          <InputSignIn placeholder={'Password'} type={'password'}/>
          
          <Button type={'primary'} text={'Log In'} />
          <HorizontalLine />
          <Button type={'success'} text={'Create new account'} />
        </Card>

      </div>


      <footer>Adrian Lazar Pop &copy; 2022 
      </footer>

    </div>


  )
}

export default SignIn;