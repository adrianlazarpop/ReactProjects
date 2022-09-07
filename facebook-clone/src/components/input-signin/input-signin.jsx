import './input-signin.styles.scss';

const InputSignIn = ({ type , placeholder}) => {
  return (
      <input placeholder={placeholder} className={ type } type={ type }></input>
  )
}

export default InputSignIn;