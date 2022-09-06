import Button from "../../components/button/button.component";
import Card from "../../components/card/card.component";



const SignIn = () => {

  return (
    <div>
      <div className="signInTitle">
        <h1>facebook</h1>
        <h2>Connect with friends and the world around you on Facebook</h2>
      </div>
      <Button type={'logIn'} text={'Log In'} />
      <Button type={'newAccount'} text={'Create new account'} />
      <Card>
        <Button type={'newAccount'} text={'Create new account'} />
        <h2>test</h2>
        <hr/>
      </Card>

    </div>


  )
}

export default SignIn;