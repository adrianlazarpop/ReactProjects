import "./square-icon.styles.scss";

const SquareIcon = ({ img }) => {
  const src = require(`../../../assets/images/${img}`);

  return (
    <div className="square-icon-container">
      <img alt="img" className="square-icon" src={src} />
    </div>
  );
};

export default SquareIcon;
