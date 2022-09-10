import "./circle-icon.styles.scss";

const CircleIcon = ({ img }) => {
  const src = require(`../../../assets/images/${img}`);

  return (
    <div className="circle-icon-container">
      <img alt="img" className="circle-icon" src={src} />
    </div>
  );
};

export default CircleIcon;
