import './card.styles.scss';


const Card = ({ children , padding }) => {
  return (
    <div className={`card-padding-${padding}`}>
      { children }
    </div>
  )
}

export default Card;