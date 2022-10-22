import classes from "./HoverIcon.module.scss";
// import imgtest from "../../../assets/images/img2.png";

const HoverIcon = ({ img }) => {
  const src = require(`../../../../assets/images/${img}`)
 
  return (
    <div>
      <img alt="img" className={classes.hoverIcon} src={src}></img>
    </div>
  );
};

export default HoverIcon;
