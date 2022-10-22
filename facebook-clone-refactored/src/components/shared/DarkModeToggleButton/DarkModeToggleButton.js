import classes from './DarkModeToggleButton.module.scss';
import moon from '../../../assets/svg/moon.svg';
import sun from '../../../assets/svg/sun.svg';

const DarkModeToggleButton = () => {

  const handleClick = (event) => {
    if (event.target.checked) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  }

  return (
    <div className={classes.container}>
      <input className={classes.input} onClick={handleClick} type='checkbox' id='darkmode-toggle' />
      <label className={classes.label} htmlFor='darkmode-toggle'>
        <img className={classes.sun} src={sun} alt='Sun logo' />
        <img className={classes.moon} src={moon} alt='Moon logo' />
      </label>
    </div>
  )
}

export default DarkModeToggleButton;