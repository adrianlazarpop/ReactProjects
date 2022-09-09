import './circle-icon.styles.scss';

const CircleIcon = ({ imgSrc }) => {
  return (
    <div className='circle-icon-container'>
      <img alt='img' className='circle-icon' src={imgSrc}></img>
    </div>
  )
}

export default CircleIcon;