import classes from "./CircleIcon.module.scss";

const CircleIcon = ({ img , isActive }) => {
  const src = require(`../../../../assets/images/${img}`);
  

  return (
    <div className={`${classes.container} ${classes[isActive]}`}>
      <img alt="img" className={classes.icon} src={src} />
    </div>
  );
};

export default CircleIcon;
