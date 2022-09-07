import './button.styles.scss';

const Button = ({type , text}) => {
  return (
    <div className='componentButton'>
      <button  className={type}>{text}</button>
    </div>
  )
}

export default Button;