import "./hover-icon.styles.scss";
import imgtest from "../../../assets/images/img2.png";

const HoverIcon = ({ img }) => {
  const src = require(`../../../assets/images/${img}`);
  return (
    // <div className='hover-icon-container'>
    <div>
      <img alt="img" className="hover-icon" src={src}></img>
      {/* <img alt="img" className="hover-icon" src={imgtest}></img> */}
    </div>
    //  </div>
  );
};

export default HoverIcon;
