import './bullet-point-icon.styles.scss';


const BulletPointIcon = ({ imgLink }) => {
  console.log(imgLink)
  return (
    <div className='header-user-icon'>
      <img alt='img' className='user-icon' src={require('../../assets/images/user-icon10.png')}></img>

    </div>
  )
}

export default BulletPointIcon;