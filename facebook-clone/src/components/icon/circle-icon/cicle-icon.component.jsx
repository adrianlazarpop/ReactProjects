import "./circle-icon.styles.scss";

const CircleIcon = ({ img , isActive }) => {
  const src = require(`../../../assets/images/${img}`);

  return (
    <div className={`circle-icon-container-is-active-${isActive}`}>
      <img alt="img" className="circle-icon" src={src} />
    </div>
  );
};

export default CircleIcon;
