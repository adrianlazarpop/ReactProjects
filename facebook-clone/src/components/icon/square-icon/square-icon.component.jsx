import './square-icon.styles.scss';

const SquareIcon = ({ imgSrc }) => {

  return (
    <div className='square-icon-container'>
      <img alt='img' className='square-icon' src={imgSrc}></img>
    </div>
  )
}

export default SquareIcon;