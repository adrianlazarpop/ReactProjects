

import icon from '../../assets/images/user-icon.png';
import CircleIcon from '../icon/circle-icon/cicle-icon.component';

import './header.styles.scss';


const Header = () => {

 


  return (
    <div className='header'>

      <div className='header-left'>
        <div className="logo">
          <a href=''><i className="facebook-logo fa-brands fa-square-facebook"></i>acebook</a>
        </div>

        <ul className="navigation">
          <li className="header-button"><a href=''><i className="navIcons fa-regular fa-bell"></i></a></li>
          <li className="header-button"><a href=''><i className="navIcons fa-regular fa-envelope"></i></a></li>
          <li className="header-button"><a href=''><i className="navIcons fa-regular fa-circle-play"></i></a></li>
          
        </ul>
      </div>

      <div className='header-right'>

        <div className="mainSearch">
          <form>
            <input type="search" className="search-box" placeholder="&#x1F50E;&#xFE0E; Search..." />
          </form>
        </div>


        <CircleIcon imgSrc={icon} />



      </div> 




    </div>
  )

}

export default Header;