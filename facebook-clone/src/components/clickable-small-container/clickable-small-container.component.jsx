import './clickable-small-container.styles.scss';

const ClickableSmallContainer = ({ children , justifyContent }) => { 
  return (
    <div className={`clickable-container-justify-content-${justifyContent}`}>
      {children}
    </div>

  )
}

export default ClickableSmallContainer;