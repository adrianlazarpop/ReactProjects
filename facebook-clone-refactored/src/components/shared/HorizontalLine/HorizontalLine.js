import classes from "./HorizontalLine.module.scss";

const HorizontalLine = ({ margin }) => {
  return <div className={`${classes.horizontalLine} ${classes[margin]}`}></div>;

  // <div className={`${classes[padding]} ${classes[flex]}`}>{children}</div>
};

export default HorizontalLine;
