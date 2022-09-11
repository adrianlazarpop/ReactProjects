import './square-input.styles.scss';

const SquareInput = ({ type , placeholder}) => {
  return (
      <input placeholder={placeholder} className={ type }></input>
  )
}

export default SquareInput;