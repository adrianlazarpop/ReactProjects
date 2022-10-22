import classes from "./RoundedInput.module.scss";

const RoundedInput = ({ placeholder, className, onChangeHandler }) => {
  return <input placeholder={placeholder} className={`${classes.input} ${className}`} onChange={onChangeHandler} type='search'></input>;
};

export default RoundedInput;
