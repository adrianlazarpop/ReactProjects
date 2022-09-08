import './bullet-square-icon.styles.scss';

const BulletSquareIcon = ({ imgLink }) => {
  console.log(imgLink)
  return (
    <div className='bullet-square-icon'>
      <img alt='img' className='user-square-icon' src={require('../../assets/images/user-icon10.png')}></img>
    </div>
  )
}

export default BulletSquareIcon;