import { Link, useLocation, useNavigate } from 'react-router-dom';
// import logo from '../logo.svg';
import classes from './Navigation.module.scss';
import DarkModeToggleButton from './shared/DarkModeToggleButton/DarkModeToggleButton';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navigation = () => {

  let location = useLocation();

  const [isLoggedIn, setIsLogin] = useState(location.pathname === '/' ? true : false);
  const navigate = useNavigate();

  // console.log(`IsLoggedIn:${isLoggedIn}`)  
  // console.log(location.pathname);
  // console.log(location.pathname==='/' ? true : false);

  const toggleAuth = () => {
    isLoggedIn ? navigate('/auth') : navigate('/');
    setIsLogin((prevState) => {
      return !prevState;
    })
  }

  const [isExpanded, setIsExpanded] = useState(false);
  const handleBurgerIconClick = () => {
    setIsExpanded((prevState) => {
      console.log(!prevState)
      return !prevState;
    });
  };
  return (
    <div className={classes.container}>
      {/* // <div className={isLoggedIn ? classes.container : classes.containerLoggedIn}> */}
      <header className={isExpanded ? classes.expandedHeader : classes.header}>

        <Link to="/">
          <div className={classes.logo}>Social Media App</div>
        </Link>

        <button className={classes.mobileMenuIcon} onClick={handleBurgerIconClick}>
          {isExpanded ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav className={classes.navBar}>
          <ul className={classes.menu}>
            <li className={!isLoggedIn ? classes.menuItemHidden : classes.menuItem}>
              {isLoggedIn && <Link to="/">Profile</Link>}
            </li>

            <li className={!isLoggedIn ? classes.menuItemHidden : classes.menuItem}>
              {isLoggedIn && <Link to="/friends">Friends</Link>}
            </li>

            <li className={!isLoggedIn ? classes.menuItemHidden : classes.menuItem}>
              {isLoggedIn && <Link to="/chat">Chat</Link>}
            </li>

            <li className={classes.menuItem}>
              <button className={classes.menuItemButton} onClick={toggleAuth}>
                {isLoggedIn ? 'LogOut' : 'LogIn'}
              </button>
              {/* <Link to="/auth">Login</Link> */}
            </li>
            <li className={classes.menuItem}>
              <DarkModeToggleButton />
            </li>
          </ul>

        </nav>
      </header>
    </div>
  );
};

export default Navigation;
