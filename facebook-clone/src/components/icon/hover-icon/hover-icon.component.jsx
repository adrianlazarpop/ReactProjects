import "./hover-icon.styles.scss";
import imgtest from "../../../assets/images/img2.png";

const HoverIcon = ({ img }) => {
  const src = require(`../../../assets/images/${img}`)
  return (
    <div>
      <img alt="img" className="hover-icon" src={src}></img>
    </div>
  );
};

export default HoverIcon;
