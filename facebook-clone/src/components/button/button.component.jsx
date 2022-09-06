import './button.styles.scss';

const Button = ({type , text}) => {
  return (
    <div>
      <button  className={`clasaTest ${type}`}>{text}</button>
    </div>
  )
}

export default Button;