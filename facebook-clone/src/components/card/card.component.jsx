import './card.styles.scss';


const Card = ({ children }) => {
  return (
    <div className='card'>
      { children }
    </div>
  )
}

export default Card;