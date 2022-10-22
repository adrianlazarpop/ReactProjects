import classes from "./SquareIcon.module.scss";

const SquareIcon = ({ img }) => {
  // const src = require(`../../../assets/images/${img}`);
  const src = require(`../../../../assets/images/${img}`);

  return (
    <div className={classes.container}>
      <img alt="img" className={classes.icon} src={src} />
    </div>
  );
};

export default SquareIcon;
