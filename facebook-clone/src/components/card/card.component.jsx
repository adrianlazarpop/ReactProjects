import "./card.styles.scss";

const Card = ({ children, padding, flex }) => {
  // console.log(`card-padding-${padding}${flex}`)
  return (
    <div className={`card-padding-${padding}-flex-${flex}`}>{children}</div>
  );
};

export default Card;
