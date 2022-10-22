import classes from './ClickableSmallContainer.module.scss';

const ClickableSmallContainer = ({ children , justifyContent }) => { 
  return (
    <div className={`${classes.container} ${classes[justifyContent]}`}>
      {children}
    </div>

  )
}

export default ClickableSmallContainer;
