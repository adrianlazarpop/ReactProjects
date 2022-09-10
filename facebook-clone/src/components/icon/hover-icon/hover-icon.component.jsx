import './hover-icon.styles.scss';

const HoverIcon = ({ imgSrc }) => {
  return (
    <div className='hover-icon-container'>
      <img alt='img' className='hover-icon' src={imgSrc}></img>
    </div>
  )
}

export default HoverIcon;