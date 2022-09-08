import './clickable-small-container.styles.scss';
// import BulletPointIcon from '../bullet-point-icon/bullet-point-icon.component';

const ClickableSmallContainer = ({ children }) => { 
  return (
    <div className="contact">
      {children}
    </div>

  )
}

export default ClickableSmallContainer;