import './header.styles.scss';
import userIcon from '../../assets/images/user-icon.png';

const Header = () => {
  return (
    <div className='header'>

      <div className='header-left'>
        <div className="logo">
          <a href=''><i class="facebook-logo fa-brands fa-square-facebook"></i>acebook</a>
        </div>

        <ul className="navigation">
          <li className="header-button"><a href=''><i class="navIcons fa-regular fa-bell"></i></a></li>
          <li className="header-button"><a href=''><i class="navIcons fa-regular fa-envelope"></i></a></li>
          <li className="header-button"><a href=''><i class="navIcons fa-regular fa-circle-play"></i></a></li>
          
        </ul>
      </div>

      <div className='header-right'>

        <div className="mainSearch">
          <form>
            <input type="search" className="search-box" placeholder="&#x1F50E;&#xFE0E; Search..." />
          </form>
        </div>
        <div className='header-user-icon'>
          <img className='user-icon' src={require('../../assets/images/user-icon.png')}></img>
        </div>



      </div> 




    </div>
  )

}

export default Header;